# Masai-MERN-Project-Final  

Personal Budget Tracker
        
    A full-stack Personal Budget Tracker built with the MERN stack (MongoDB, Express, React, Node.js).
    This app helps users manage their finances by tracking income, expenses, categories, and budgets straightforwardly and intuitively.

🚀 Live Demo: [Masai MERN Project Final]   (https://masai-mern-project-final.onrender.com/)


📌 Features

🔐 User Authentication

    Register, Login, Logout
    Secure password hashing with bcrypt
    JWT-based authentication

💸 Expense & Income Tracking

    Add, edit, and delete transactions
    Categorize expenses (Food, Travel, Shopping, Bills, etc.)
    Separate tracking for Income & Expenses

📊 Dashboard & Analytics

    Graphical insights (charts) for income vs. expenses
    Filter transactions by date, type, and category

📱 Responsive UI

    Built with React + Ant Design
    Works seamlessly on desktop & mobile

💾 Database

    MongoDB for data persistence
    Mongoose for schema modeling

🛠️ Tech Stack

    Frontend
    React.js
    (UI components)
    Axios (API calls)
    React Router
    Backend
    Node.js
    Express.js
    JWT Authentication
    bcrypt.js
    Database
    MongoDB (Atlas)
    Deployment
    Backend: Render
    Frontend: Netlify / Render


# Project Diagrams

## ER Diagram
<img width="1012" height="380" alt="er daig" src="https://github.com/user-attachments/assets/6330f243-ef79-4732-bdca-0cb93511ca15" />


## UML Diagram
<img width="510" height="812" alt="uml" src="https://github.com/user-attachments/assets/64a651c4-3c85-42cc-ad3f-961a8f72a5d4" />


## Sequence Diagram
<img width="792" height="442" alt="sequence daigram" src="https://github.com/user-attachments/assets/3d6475a0-d7b2-46ca-a635-a512ba189c74" />


📂 Project Structure

    Masai-MERN-Project-Final/
    │── backend/          # Express + MongoDB API
    │   ├── models/       # Mongoose schemas
    │   ├── routes/       # API routes
    │   ├── controllers/  # Business logic
    │   └── server.js     # App entry point
    │
    │── frontend/         # React App
    │   ├── src/
    │   │   ├── components/  # Reusable UI components
    │   │   ├── pages/       # Pages (Login, Register, Dashboard, etc.)
    │   │   ├── context/     # State management
    │   │   └── App.js
    │
    │── README.md         # Documentation





⚙️ Installation & Setup (Local)

Follow these steps to run the project locally:

    1️⃣ Clone the Repository
       git clone https://github.com/MayankSahu297/Masai-MERN-Project-Final.git
       cd Masai-MERN-Project-Final

    2️⃣ Setup Backend
       cd backend
       npm install


    Create a .env file in the backend/ folder:

      MONGO_URL=your_mongodb_connection_string
      JWT_SECRET=your_secret_key
      PORT=8080


Run backend:

     npm start

    3️⃣ Setup Frontend
       cd frontend
       npm install
       npm start


Frontend will run on http://localhost:3000
Backend will run on http://localhost:8080
