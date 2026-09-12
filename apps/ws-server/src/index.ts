import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    try {
        await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        socket.send("hi there from web socket server");
    } catch (error) {
        console.error("Error inserting user on connection:", error);
        socket.send("Error creating user");
    }
});