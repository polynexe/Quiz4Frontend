# ClickUp Replacement – Project Management System (Frontend)

This project is a **ClickUp replacement focused on core Project Management features**, developed under time constraints.  
It implements **Role-Based Access Control (RBAC)** and allows teams to manage projects and tasks efficiently.

The **frontend is built using React.js** with **Redux** for state management.

---

## 🚀 Features Overview

### 🔐 Role-Based Access Control (RBAC)

The system supports three roles:

- **Admin**
  - View all projects
  - Create projects
  - Create tasks
  - View all users
  - Create users
- **Manager**
  - View assigned projects
  - Create tasks within assigned projects
- **User**
  - View assigned projects and tasks only

Frontend permissions are enforced in addition to backend validation.

---

# React Project Setup Guide

This guide explains how to **clone** the repository and **run the React application locally**.

---

## 📌 Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)
- **Git**

To check if they are installed:
node -v
npm -v
git --version

---

## 📥 Clone the Repository

https://github.com/polynexe/Quiz4Frontend.git

---

## 📦 Install Dependencies

Install all required packages using npm:

npm install

This will create the `node_modules` folder and install all dependencies listed in `package.json`.

---

## ▶️ Start the Development Server

Run the React development server:

The application will automatically open in your browser at:

http://localhost:3000

in the terminal.

---

## 🧠 Notes

- Make sure the backend API is running if the app depends on it
- Environment variables (if any) should be set before running the app
- Do not commit the `node_modules` folder

---
