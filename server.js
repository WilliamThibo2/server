const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // Permettre toutes les origines pour les tests
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Un utilisateur est connecté');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Émettre le message à tous les clients
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur est déconnecté');
    });
});

// Écoute sur le port 10000
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${PORT}`);
});
) => console.log(`Serveur démarré sur le port ${PORT}`));
