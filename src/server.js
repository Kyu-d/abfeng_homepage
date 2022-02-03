import express from "express";

const PORT = 4000;

const app = express(); // Create Express Application

const handleListening = () => console.log(`Server listening on port http://localhose:${PORT}`);

app.listen(PORT, handleListening);

// request & response