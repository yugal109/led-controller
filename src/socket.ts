import { Server, Socket } from "socket.io";

export const registerSocketEvents = (io: Server) => {
  // log name space
  const logNameSpace = io.of("/logs");
  logNameSpace.on("connection", (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`${socket.id} joined room: ${room}`);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};
