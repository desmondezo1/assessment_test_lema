# Lema Test Project

Welcome to the **Lema Test Project**, a full-stack application designed to manage users and their posts. This project consists of a **Frontend** built with Next.js and React, and a **Backend** powered by Express.js and Sequelize. The application includes robust API endpoints for managing users and posts, complete with pagination and comprehensive Postman API documentation.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Clone the Repository](#clone-the-repository)
  - [Setup Backend](#setup-backend)
  - [Setup Frontend](#setup-frontend)
- [Configuration](#configuration)
  - [Backend Environment Variables](#backend-environment-variables)
- [Running the Application](#running-the-application)
  - [Start Backend Server](#start-backend-server)
  - [Start Frontend Server](#start-frontend-server)
- [API Documentation](#api-documentation)
  - [Importing Postman Collection](#importing-postman-collection)
  - [Available Endpoints](#available-endpoints)
- [Testing](#testing)
  - [Backend Tests](#backend-tests)
  - [Frontend Tests](#frontend-tests)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

---

## Project Overview

The **Lema Test Project** is a full-stack web application that allows users to:

- **Manage Users**: Create, read, update, and delete user profiles.
- **Manage Posts**: Each user can have multiple posts. Users can create, view, and delete their posts.
- **Pagination**: Efficiently handle large datasets with pagination on both users and posts.
- **API Integration**: Seamless communication between the frontend and backend through RESTful APIs.
- **Testing**: Comprehensive testing for both frontend and backend to ensure reliability.

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js**: Version **16.x.x** or higher
- **npm**: Version **8.x.x** or higher (comes with Node.js)
- **Git**: For version control
- **Postman**: For API testing (optional but recommended)

> **Note**: It's recommended to use a version manager like **nvm** to manage multiple Node.js versions.

---

## Project Structure

```
lema-test/
├── backend/
│   ├── node_modules/
│   ├── tests/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── ...other backend files
├── frontend/
│   ├── node_modules/
│   ├── src/
│   │   ├── app/
│   │   │   ├── favicon.ico
│   │   │   └── ...other frontend files
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── ...other frontend files
├── README.md
└── ...other root files
```

- **backend/**: Contains the Express.js server, API routes, and related configurations.
- **frontend/**: Contains the Next.js (react) application with React components and related configurations.

---

## Installation

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/desmondezo1/assessment_test_lema.git
cd lema-test
```

### Setup Backend

1. **Navigate to the Backend Directory**:

    ```bash
    cd backend
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the `backend` directory based on the `.env.example` (if available). If not provided, you can create one with the necessary configurations.

    ```bash
    touch .env
    ```

    **Example `.env` Configuration**:

    ```env
    PORT=3000
    JWT_SECRET=your_jwt_secret
    ```

4. **Run Database Migrations (If Applicable)**:

    If using Sequelize with migrations, ensure to run them. This step may vary based on your project setup.

    ```bash
    npx sequelize-cli db:migrate
    ```

### Setup Frontend

1. **Navigate to the Frontend Directory**:

    Open a new terminal window/tab and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env.local` file in the `frontend` directory for frontend-specific environment variables.

    ```bash
    touch .env.local
    ```

    **Example `.env.local` Configuration**:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1
    ```

    > **Note**: Adjust the `NEXT_PUBLIC_API_URL` based on your backend server's URL and port.

---

## Configuration

### Backend Environment Variables

Ensure the following environment variables are set in the `backend/.env` file:

- **PORT**: The port on which the backend server will run (default: `3001`).
- **JWT_SECRET**: A secret key for JWT authentication.
- **DATABASE_URL**: Connection string for your database (if applicable).
- **DATABASE_URL**: Connection string for your database (if applicable).
- **FRONTEND_URL**: http://localhost:3000

**Example `.env` File**:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
DATABASE_URL=sqlite://./database.sqlite
```

> **Note**: Adjust the `DATABASE_URL` based on your database configuration. The example uses SQLite.

---

## Running the Application

### Start Backend Server

1. **Navigate to Backend Directory**:

    ```bash
    cd backend
    ```

2. **Start the Server in Development Mode**:

    ```bash
    npm run dev
    ```

    This command uses **nodemon** to watch for file changes and automatically restarts the server.

3. **Verify the Server is Running**:

    Open your browser and navigate to `http://localhost:3000` (or the port specified in your `.env` file).

### Start Frontend Server

1. **Navigate to Frontend Directory**:

    Open a new terminal window/tab and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. **Start the Development Server**:

    ```bash
    npm run dev
    ```

    This command starts the Next.js development server.

3. **Access the Frontend**:

    Open your browser and navigate to `http://localhost:3000` (or the port specified in your frontend configuration).

---

## API Documentation

This project provides a set of RESTful APIs for managing users and their posts. Below are the available endpoints along with instructions on how to import and use them in Postman.

### Importing Postman Collection

To test the APIs, you can use the provided Postman collection.

1. **Install Postman**:

    If you haven't already, download and install [Postman](https://www.postman.com/downloads/).

2. **Import the Collection**:

    - Open Postman.
    - Click on the `Import` button.
    - Select the `Raw Text` tab.
    - Paste the provided Postman collection JSON (from your message) into the text area.
    - Click `Continue`, then `Import`.

3. **Access the Imported Collection**:

    After importing, the collection named `Lema_test` will appear in your Postman workspace. You can now interact with the API endpoints.

### Available Endpoints

#### 1. **Get Users**

- **Endpoint**: `GET /api/v1/users`
- **Description**: Retrieves a list of users with pagination.
- **URL**: `http://localhost:3000/api/v1/users`
- **Response**:

    ```json
    {
        "success": true,
        "data": [
            {
                "id": "d3a4ec91a50447ebb64e395e124caf40",
                "name": "Prof. Benedict Prosacco",
                "username": "wEZBVcG",
                "email": "VTRJMGE@grWrwHd.org",
                "phone": "641-107-9352",
                "address": {
                    "id": "c5358841705b44178fc464f51c69e24e",
                    "userId": "d3a4ec91a50447ebb64e395e124caf40",
                    "street": "4709 Blagden Terrace Northwest",
                    "state": "DC",
                    "city": "Washington",
                    "zipcode": "20011"
                }
            },
            // ... more users
        ],
        "pagination": {
            "total": 100,
            "currentPage": 1,
            "totalPages": 25,
            "limit": 4
        }
    }
    ```

#### 2. **Get User's Posts**

- **Endpoint**: `GET /api/v1/users/:userId/posts`
- **Description**: Retrieves posts made by a specific user.
- **URL**: `http://localhost:3001/api/v1/users/d3a4ec91a50447ebb64e395e124caf40/posts`
- **Response**:

    ```json
    {
        "success": true,
        "data": [
            {
                "id": "5da145706f1a40d581fdcd4bc92f73a9",
                "userId": "d3a4ec91a50447ebb64e395e124caf40",
                "title": "Et occaecati ab cupiditate cum exercitationem.",
                "body": "Nobis est nulla et nesciunt odio...",
                "createdAt": "2024-11-06T13:48:58+02:00",
                "user_id": "d3a4ec91a50447ebb64e395e124caf40"
            },
            // ... more posts
        ],
        "pagination": {
            "total": 4,
            "currentPage": 1,
            "totalPages": 1,
            "limit": 4
        }
    }
    ```

#### 3. **Delete a Post**

- **Endpoint**: `DELETE /api/v1/posts/:postId`
- **Description**: Deletes a specific post.
- **URL**: `http://localhost:3001/api/v1/posts/5da145706f1a40d581fdcd4bc92f73a9`
- **Response**:

    ```json
    {
        "success": true,
        "message": "Post deleted successfully",
        "data": {
            "message": "Post deleted successfully"
        }
    }
    ```

#### 4. **Get All Posts**

- **Endpoint**: `GET /api/v1/posts`
- **Description**: Retrieves all posts with pagination.
- **URL**: `http://localhost:3001/api/v1/posts`
- **Response**:

    ```json
    {
        "success": true,
        "data": [
            {
                "id": "a13e7750c915422480b2c65925c29449",
                "userId": "d3a4ec91a50447ebb64e395e124caf40",
                "title": "Consequuntur placeat porro quos excepturi qui.",
                "body": "Explicabo ducimus molestias voluptas et tempore...",
                "createdAt": "2023-12-05T10:39:54+02:00",
                "user_id": "d3a4ec91a50447ebb64e395e124caf40",
                "user": {
                    "name": "Prof. Benedict Prosacco"
                }
            },
            // ... more posts
        ],
        "pagination": {
            "total": 849,
            "currentPage": 1,
            "totalPages": 213,
            "limit": 4
        }
    }
    ```

> **Note**: Replace `localhost` and port `3000` with your server's actual host and port if different.

---

## Testing

Testing ensures the reliability and correctness of your application. Both the frontend and backend include tests that can be run using Jest.

### Backend Tests

1. **Navigate to Backend Directory**:

    ```bash
    cd backend
    ```

2. **Run Tests**:

    ```bash
    npm test
    ```

    - **Watch Mode**:

        ```bash
        npm run test:watch
        ```

3. **Test Coverage**:

    To generate a test coverage report:

    ```bash
    npx jest --coverage
    ```

### Frontend Tests

1. **Navigate to Frontend Directory**:

    ```bash
    cd frontend
    ```

2. **Run Tests**:

    ```bash
    npm test
    ```

    - **Watch Mode**:

        ```bash
        npm run test:watch
        ```

3. **Test Coverage**:

    To generate a test coverage report:

    ```bash
    npx jest --coverage
    ```

> **Note**: Ensure that both frontend and backend servers are not running while executing tests to avoid port conflicts.

---

## Deployment

Deploying your application allows users to access it over the internet. Below are general guidelines for deploying both the frontend and backend.

### Backend Deployment

1. **Choose a Hosting Provider**:

    Popular choices include:
    - **Heroku**
    - **AWS (Elastic Beanstalk, EC2)**
    - **DigitalOcean**
    - **Vercel** (supports Node.js)

2. **Setup Environment Variables**:

    Ensure all necessary environment variables are set on the hosting platform.

3. **Database Configuration**:

    If using a production database (e.g., PostgreSQL, MySQL), ensure it's properly configured and connected.

4. **Deploy**:

    Follow the hosting provider's instructions to deploy your Express.js application.

### Frontend Deployment

1. **Choose a Hosting Provider**:

    Popular choices include:
    - **Vercel** (optimized for Next.js)
    - **Netlify**
    - **AWS (S3 + CloudFront)**
    - **Heroku**

2. **Configure Environment Variables**:

    Ensure all necessary environment variables are set, especially `NEXT_PUBLIC_API_URL`.

3. **Build the Application**:

    ```bash
    npm run build
    ```

4. **Deploy**:

    Follow the hosting provider's instructions to deploy your Next.js application.

---

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. **Fork the Repository**:

    Click the `Fork` button on the repository page to create your own copy.

2. **Clone Your Fork**:

    ```bash
    git clone https://github.com/desmondezo1/assessment_test_lema.git
    cd lema-test
    ```

3. **Create a Branch**:

    ```bash
    git checkout -b feature/YourFeatureName
    ```

4. **Make Changes**:

    Implement your feature or fix.

5. **Commit Changes**:

    ```bash
    git commit -m "Add feature: YourFeatureName"
    ```

6. **Push to Your Fork**:

    ```bash
    git push origin feature/YourFeatureName
    ```

7. **Create a Pull Request**:

    Go to the original repository and create a pull request from your fork.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Troubleshooting

Encountering issues while setting up or running the project? Here are some common problems and solutions:

### 1. **Port Conflicts**

- **Issue**: Another application is using the same port.
- **Solution**: Change the port in your `.env` file or stop the application using the conflicting port.

### 2. **Missing Environment Variables**

- **Issue**: The application fails to start due to missing variables.
- **Solution**: Ensure all required environment variables are set in the `.env` files for both frontend and backend.

### 3. **Database Connection Errors**

- **Issue**: Unable to connect to the database.
- **Solution**: Verify your `DATABASE_URL` and ensure the database server is running.

### 4. **Build Failures**

- **Issue**: Errors during the build process.
- **Solution**:
    - Check for syntax errors in your code.
    - Ensure all dependencies are installed.
    - Clear caches by deleting `node_modules` and `package-lock.json`, then reinstalling.

    ```bash
    rm -rf node_modules package-lock.json
    npm install
    ```

### 5. **API Not Responding**

- **Issue**: Frontend cannot communicate with the backend.
- **Solution**:
    - Ensure the backend server is running.
    - Verify the `NEXT_PUBLIC_API_URL` in the frontend `.env.local` file points to the correct backend URL.
    - Check for CORS issues in the backend configuration.

### 6. **Invalid Favicon Error**

Based on your earlier error logs, you might encounter issues related to the `favicon.ico` file being too large or containing invalid characters.

- **Solution**:
    - **File Size**: Ensure `favicon.ico` is under 8MB. Preferably, it should be around 100KB.
    - **File Path**: Avoid special characters and spaces in the file path. Rename directories if necessary to remove apostrophes or other special characters.

### 7. **Next.js Version Issues**

If you encounter compatibility issues with Next.js versions:

- **Solution**:
    - Ensure you're using a stable version of Next.js. As of the latest update, Next.js v15.0.3 is not officially supported.
    - Downgrade to the latest stable version (e.g., v13.x.x).

    ```bash
    npm install next@latest
    ```

### 8. **Bus Error**

If you encounter a `bus error` in your terminal:

- **Solution**:
    - Restart your terminal.
    - Ensure no conflicting processes are running.
    - Reinstall dependencies.
    - Check for corrupted files.

---

## Contact

For any questions, issues, or suggestions, please open an issue in the [GitHub repository](https://github.com/desmondezo1/assessment_test_lema/issues) or contact the project maintainer at [desmondezoojile@gmail.com](mailto:desmondezoojile@gmail.com).

---

Thank you for using the **Lema Test Project**! We hope this guide helps you set up and run the application smoothly. Happy coding!
