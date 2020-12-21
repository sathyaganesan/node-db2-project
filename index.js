const express = require("express");
const helmet = require("helmet");

const welcomeRouter = require("./welcome/welcomeRouter");
const carRouter = require("./cars/carRouter");

const server = express();
const port = process.env.PORT || 3000;

server.use(helmet());
server.use(express.json());

server.use(welcomeRouter);
server.use(carRouter);

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        Message: "Something went wrong."
    })
})

server.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
})