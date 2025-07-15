**`MERN-PlacesHub`**

Why? It’s short, descriptive, and flexible:

* **MERN** → technology stack
* **Places** → reflects the goal (sharing places)
* **Hub** → makes it sound like a base for users and developers to build on

---

### 📘 `README.md` for `MERN-PlacesHub`

````markdown
# MERN-PlacesHub 🌍

A simple, fullstack MERN (MongoDB, Express, React, Node.js) project that allows authenticated users to share **places** with an image, description, and address. The app automatically fetches and displays the location on a map using an external geolocation API.

> 🔧 **Built as a learning project following** [Maximilian Schwarzmüller's React Bootcamp on Udemy](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?couponCode=MT150725G2)

---

## 🚀 Features

- Fullstack MERN architecture
- RESTful API
- User Authentication & Authorization
- Upload place with:
  - 🖼️ Image
  - 📍 Address (converted to location via map API)
  - 📝 Description
- Responsive UI with simple styling
- Client-side and server-side form validation

---

## ⚙️ Technologies Used

- **Frontend:** React, React Router, Context API
- **Backend:** Node.js, Express
- **Database:** MongoDB (Local instance)
- **Map API:** Geocoding API (requires key in `.env`)
- **File Handling:** Multer (Image uploads)

---

## 📂 Project Structure

```bash
mern-placeshub/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── app.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── .env.example
└── README.md
````

---

## 🛠️ Setup Instructions

> ⚠️ Some critical files (e.g., `.env`) are not included in this repo for security reasons. You’ll need to configure them manually.

1. Clone the repo:

```bash
git clone https://github.com/your-username/mern-placeshub.git
cd mern-placeshub
```

2. Install dependencies for **backend**:

```bash
cd backend
npm install
```

3. Create a `.env` file in `/backend` and define:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/your-db-name
GOOGLE_API_KEY=your_api_key_here
```

4. Start backend server:

```bash
npm start
```

5. Install dependencies for **frontend**:

```bash
cd ../frontend
npm install
```

6. Start frontend development server:

```bash
npm start
```

---

## ⚠️ Notes

* 🔐 This is a **learning project**, not intended for production.
* 🧪 The code may be outdated or not fully secure.
* 📦 Database and API keys are expected to be **configured locally** via `.env`.
* 💡 Designed as a **starter template** for future MERN stack projects.
