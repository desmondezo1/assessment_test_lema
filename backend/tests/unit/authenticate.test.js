const jwt = require('jsonwebtoken');
const authenticate = require('../../src/middlewares/authenticate');
const ApiResponse = require('../../src/utils/apiResponse');

jest.mock('jsonwebtoken');

describe('Auth Middleware', () => {
    let res, next;

    beforeEach(() => {
        // Mock res object
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        // Mock next function
        next = jest.fn();
    });

    it('should attach user to req when token is valid', () => {
        const mockToken = 'mockValidToken';
        const mockDecoded = { id: 'user123', email: 'user@example.com' };

        jwt.verify.mockReturnValue(mockDecoded);

        const req = { headers: { authorization: `Bearer ${mockToken}` } };

        authenticate(req, res, next);

        expect(req.user).toEqual(mockDecoded);
        expect(next).toHaveBeenCalled();
    });

    it('should return 401 if token is missing', () => {
        const req = { headers: {} };

        authenticate(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(ApiResponse.error('No token provided', 401));
        expect(next).not.toHaveBeenCalled(); // Ensure next is not called
    });

    it('should return 401 if token is expired', () => {
        jwt.verify.mockImplementation(() => {
            const error = new Error('Token expired');
            error.name = 'TokenExpiredError';
            throw error;
        });

        const req = { headers: { authorization: 'Bearer expiredToken' } };

        authenticate(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith(ApiResponse.error('Token expired', 401));
        expect(next).not.toHaveBeenCalled(); 
    });
});
