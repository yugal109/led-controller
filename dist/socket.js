export const registerSocketEvents = (io) => {
    // log name space
    const logNameSpace = io.of("/logs");
    logNameSpace.on("connection", (socket) => {
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
//# sourceMappingURL=socket.js.map