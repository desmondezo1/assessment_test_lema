class ApiResponse {
    static success(data, message = 'Success') {
      return {
        success: true,
        message,
        data
      };
    }
  
    static paginated(data, pagination) {
      return {
        success: true,
        data,
        pagination: {
          total: pagination.total,
          currentPage: pagination.currentPage,
          totalPages: pagination.totalPages,
          limit: pagination.limit
        }
      };
    }
  
    static error(message, statusCode = 500) {
      return {
        success: false,
        message,
        statusCode
      };
    }
  }
  
  module.exports = ApiResponse;