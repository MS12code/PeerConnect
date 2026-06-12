let IS_PROD = true;

const server = IS_PROD
  ? "https://peerconnect-d82u.onrender.com/"
  : "http://localhost:8000";

export default server;