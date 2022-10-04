import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
        <html>
            <body>
                <h1>Funcionando !</h1>
                <h3>${new Date()}</h3>
            </body>
        </html>
    `);
});

app.get("/test", (req, res) => {
  res.status(200).json({ sucess: true });
});

export { app }