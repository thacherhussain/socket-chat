const server = require("http").createServer();
const io = require("socket.io")(server);

const PORT = 4000;
const CHAT_EVENT = "chat_message_event";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  socket.on(CHAT_EVENT, (data) => {
    io.emit(CHAT_EVENT, data);
  });

  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} disconnected`);
    socket.leave();
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});