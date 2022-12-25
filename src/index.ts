import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GBKEY });

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/users", async (req: Request, res: Response) => {
  const since = req.query.since;
  const per_page = req.query.per_page;
  const usersList = await octokit.request(
    `/users?since=${since}&per_page=${per_page}`
  );
  res.json(usersList.data);
});

app.get("/api/users/:username/details", async (req: Request, res: Response) => {
  const username = req.params.username;
  const userDetails = await octokit.request(
    `https://api.github.com/users/${username}`
  );
  res.json(userDetails.data);
});

app.get("/api/users/:username/repos", async (req: Request, res: Response) => {
  const username = req.params.username;
  const userRepos = await octokit.request(
    `https://api.github.com/users/${username}/repos`
  );
  res.json(userRepos.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
