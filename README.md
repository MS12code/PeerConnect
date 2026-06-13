# PeerConnect

A full-stack real-time video conferencing platform built with the **MERN Stack**, **WebRTC**, and **Socket.IO**. PeerConnect enables users to securely connect through high-quality video calls, exchange instant messages during meetings, and manage their meeting history.

## 🌐 Live Demo

* **Frontend:** https://peer-connect-beta.vercel.app/
* **Backend API:** https://peerconnect-d82u.onrender.com

---

## ✨ Features

* 🎥 **Real-Time Video Conferencing** – Peer-to-peer video calls powered by WebRTC.
* 💬 **Instant Chat Messaging** – Exchange messages during meetings using Socket.IO.
* 🔐 **Authentication** – User registration and login functionality.
* 📜 **Meeting History** – View and track previously attended meetings stored in MongoDB.
* ⚡ **Real-Time Communication** – Low-latency signaling with Socket.IO.
* ☁️ **Cloud Deployment** – Frontend deployed on Vercel and backend hosted on Render using HTTPS.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Context API
* CSS3
* React Router DOM

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB Atlas
* Mongoose

### Real-Time Technologies

* WebRTC
* Socket.IO

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```
PeerConnect/
├── frontend/
│   ├── public/
│   └── src/
│       ├── contexts/
│       ├── pages/
│       ├── styles/
│       ├── utils/
│       ├── App.js
│       └── index.js
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MS12code/PeerConnect.git
cd PeerConnect
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```

Start the backend server:

```bash
npm start
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

The frontend will run on:

```
http://localhost:3000
```

---

## 🔮 Future Scope

* 📞 One-to-one and group video conferencing support.
* 🎥 Screen sharing functionality.
* 📝 Meeting recording and playback.
* 😀 Emoji reactions and participant hand raise.
* 📅 Meeting scheduling and calendar integration.
* 🔔 Real-time notifications.
* 👥 Participant management and moderation controls.

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve PeerConnect:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

Please ensure your code follows consistent formatting and includes meaningful commit messages.

---

## 👩‍💻 Author

**Medha Sharma**

* GitHub: https://github.com/MS12code

If you found this project helpful, consider giving it a ⭐ on GitHub!
