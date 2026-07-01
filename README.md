# PrimeTrade Backend Developer Assignment

## Project Overview

This project is a Full Stack Product Management System built as part of the PrimeTrade Backend Developer Internship Assignment.

The application provides secure authentication using JWT, role-based authorization, and complete CRUD operations for product management.

---

## Features

### Backend

- User Registration
- User Login
- JWT Authentication
- Password Hashing
- Role-Based Access (Admin/User)
- Product CRUD APIs
- RESTful API Design
- API Versioning (/api/v1/)
- Swagger API Documentation
- MySQL Database

### Frontend

- Login Page
- Register Page
- Dashboard
- Product Management
- Add Product
- Edit Product
- Delete Product
- Protected Routes
- Responsive UI
- Tailwind CSS
- Toast Notifications

---

## Technology Stack

### Backend

- Python
- Django
- Django REST Framework
- Simple JWT
- MySQL
- DRF Spectacular (Swagger)

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Sonner

---

## Installation

### Backend

```bash
git clone <repository-url>

cd prime_backend_assignment

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## API Documentation

Swagger

```
http://127.0.0.1:8000/api/docs/
```

---

## API Endpoints

### Authentication

POST /api/v1/auth/register/

POST /api/v1/auth/login/

POST /api/v1/auth/refresh/

### Products

GET /api/v1/products/

POST /api/v1/products/

GET /api/v1/products/{id}/

PUT /api/v1/products/{id}/

DELETE /api/v1/products/{id}/

---

## Project Structure

```
prime_backend_assignment/

│

├── accounts/

├── products/

├── common/

├── config/

├── frontend/

├── requirements.txt

├── README.md

└── manage.py
```

---

## Security

- JWT Authentication
- Password Hashing
- Role-Based Authorization
- Input Validation
- Protected APIs

---

## Future Improvements

- Redis Caching
- Docker Deployment
- CI/CD Pipeline
- Unit Testing
- Logging
- Microservices
- Kubernetes Deployment

---

## Author

Kolla Sagar

Backend Developer Intern Assignment

2026