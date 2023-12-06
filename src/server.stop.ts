
import { io } from "socket.io-client"

const socket = io('http://localhost:3000'); // Specify port if your express server is not using default port 80

socket.on('connect', () => {
  socket.emit('npm-stop');

  setTimeout(() => {
    process.exit(0);
  }, 1000);
});
