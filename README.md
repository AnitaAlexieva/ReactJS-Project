# ReactJS-Project from SoftUni
<br>

<div align="center">
    <h2>Taste Book</h2>
    <h3>From Kitchen to Cookbook – Discover, Create & Share!</h3>
</div>

## Live Demo
https://react-js-project-delta.vercel.app/

![Екранна снимка 2025-04-02 145907](https://github.com/user-attachments/assets/f9ee6f12-e26a-49f2-a8c6-d50abc58ba68)


## 📜 Tech Stack

- **React**: 19.0.0 – Frontend library for building UI.
- **React DOM**: 19.0.0 – Handles rendering React components in the browser.
- **React Router**: 7.3.0 – Manages navigation and routing in the app.
- **Axios**: 1.8.4 – Fetches recipe data from TheMealDB (https://www.themealdb.com).
- **React Toastify**: 11.0.5 – Provides user-friendly notifications.
- **SoftUni Practice Server**: Manages backend functionalities and user data.
- **Render**: Used to deploy the server.
- **Vercel**: Used to deploy the website.
- **GitHub**: Version control for the project.
- **GitHub Desktop**: Simplifies repository management.

## 🚀 Features & Functionality

### 🌍 Public (Guest) Features

- **Home Page (`/`)** – Displays the latest recipes dynamically.
- **Recipes Page (`/recipes`)** – Lists all available recipes.
- **Recipe Details Page (`/recipes/:recipeId/details`)** – Shows detailed information about a specific recipe.
- **Books Page (`/books`)** – Displays all available recipe books.
- **Book Details Page (`/books/:bookId/details`)** – Shows information about a specific recipe book.
- **About Us (`/about`)** – A static page with information about the platform.
- **Sign In (`/login`)** – Login page for registered users.
- **Sign Up (`/register`)** – Registration page for new users.
- **404 Error Page (`/*`)** – Handles unknown routes.

### 🔐 Private (Authenticated User) Features

- **Create Recipe (`/recipe/create`)** – Allows users to add new recipes.
- **Edit Recipe (`/recipes/:recipeId/edit`)** – Users can edit their own created recipes.
- **Create Recipe Book (`/books/create`)** – Users can create a new recipe book.
- **Edit Book (`/books/:bookId/edit`)** – Users can edit their own recipe books.
- **Meal Search (`/meals`)** – Logged-in users can explore meals using TheMealDB API.
- **Logout (`/logout`)** – Users can sign out of their accounts.
- **Comments** – Users can interact with recipes through comments.
- **Edit & Delete Buttons** – Visible only for the creators of the recipe/book.

### ⚡ Additional Functionalities

- **GuestGuard** – Prevents logged-in users from accessing login/register pages.
- **AuthGuard** – Ensures only authenticated users can create, edit, or manage content.
- **Toast Notifications (`react-toastify`)** – Provides real-time feedback on user actions.


