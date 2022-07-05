import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/user", (req: Request, res: Response) => {
  const name = req.query.name;
  console.log(`${name} logged in`);

  res.status(200).send(`${name} logged in`);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).send(`<p style='text-align: center'> welcome </p>`);
});

export default app;
