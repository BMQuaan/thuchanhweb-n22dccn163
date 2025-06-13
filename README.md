GreenMart Backend
Overview
GreenMart Backend is the server-side application for the GreenMart e-commerce platform, built with Node.js, Express, and MongoDB. It provides APIs for managing products, users, orders, and payments, enabling a seamless shopping experience.
Features

User Management: Register, login, and manage user profiles with JWT-based authentication.
Product Management: Create, read, update, and delete products with category and image support.
Order Processing: Handle cart, checkout, and order history with real-time updates.
Payment Integration: Supports payments via Stripe (or other gateways, if configured).
Admin Dashboard: APIs for managing products, orders, and users (admin-only routes).
RESTful APIs: Well-structured endpoints with error handling and validation.

Tech Stack

Node.js: Runtime environment for executing JavaScript server-side.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database for storing user, product, and order data.
Mongoose: ODM for MongoDB to manage schema and queries.
JWT: For secure authentication and authorization.
Stripe: For payment processing (if integrated).
Docker: Containerization for consistent development and deployment.
Other Dependencies: bcrypt (password hashing), dotenv (environment variables), and more.

Prerequisites

Node.js (v16 or higher)
MongoDB (local or cloud instance, e.g., MongoDB Atlas)
Docker (optional, for containerized setup)
Stripe account (if using payment features)

Installation

Clone the Repository:
git clone https://github.com/BMQuaan/greenmart-backend.git
cd greenmart-backend


Install Dependencies:
npm install


Set Up Environment Variables:Create a .env file in the root directory and add the following:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key


Run the Application:

Development mode:npm run dev


Production mode:npm start




Docker Setup (optional):
docker-compose up --build



API Endpoints
Below are some key API endpoints. For a complete list, refer to the API documentation or use tools like Postman to explore.

Auth:
POST /api/auth/register: Register a new user
POST /api/auth/login: User login with JWT token


Products:
GET /api/products: Get all products
POST /api/products: Create a new product (admin only)


Orders:
POST /api/orders: Create a new order
GET /api/orders/me: Get user order history


Admin:
GET /api/admin/users: List all users (admin only)
PUT /api/admin/products/:id: Update product details (admin only)



Project Structure
greenmart-backend/
├── config/          # Configuration files (e.g., database connection)
├── controllers/     # Request handlers for API routes
├── middleware/      # Custom middleware (e.g., authentication)
├── models/          # Mongoose schemas (User, Product, Order)
├── routes/          # Express route definitions
├── utils/           # Utility functions (e.g., error handling)
├── .env             # Environment variables
├── docker-compose.yml # Docker configuration
├── package.json     # Project metadata and dependencies
└── server.js        # Entry point

Usage

Start the server using npm run dev.
Use Postman or a similar tool to test APIs at http://localhost:5000/api.
Ensure MongoDB is running and the .env file is correctly configured.
For admin routes, include a valid JWT token with admin privileges in the Authorization header.

Testing
Run tests (if available) using:
npm test

Deployment
To deploy the application:

Set up a production MongoDB instance (e.g., MongoDB Atlas).
Deploy to a platform like Heroku, AWS, or Render.
Use Docker for containerized deployment:docker build -t greenmart-backend .
docker run -p 5000:5000 greenmart-backend



Contributing

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Create a Pull Request.

License
This project is licensed under the MIT License.
Contact
For issues or inquiries, please open an issue on GitHub or contact the repository owner at BMQuaan.
