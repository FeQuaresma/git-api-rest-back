import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Octokit } from "octokit";
const octokit = new Octokit({ auth: process.env.GBKEY });
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors({
    origin: "*",
}));
app.get("/api/users", async (req, res) => {
    const since = req.query.since;
    const per_page = req.query.per_page;
    const usersList = await octokit.request(`/users?since=${since}&per_page=${per_page}`);
    res.json(usersList.data);
});
app.get("/api/users/:username/details", async (req, res) => {
    const username = req.params.username;
    const userDetails = await octokit.request(`https://api.github.com/users/${username}`);
    res.json(userDetails.data);
});
app.get("/api/users/:username/repos", async (req, res) => {
    const username = req.params.username;
    const userRepos = await octokit.request(`https://api.github.com/users/${username}/repos`);
    res.json(userRepos.data);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7QUFFekQsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxHQUFHLENBQ0wsSUFBSSxDQUFDO0lBQ0gsTUFBTSxFQUFFLEdBQUc7Q0FDWixDQUFDLENBQ0gsQ0FBQztBQUVGLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDOUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDcEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUNyQyxnQkFBZ0IsS0FBSyxhQUFhLFFBQVEsRUFBRSxDQUM3QyxDQUFDO0lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUUsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDckMsTUFBTSxXQUFXLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUN2QyxnQ0FBZ0MsUUFBUSxFQUFFLENBQzNDLENBQUM7SUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMxRSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxNQUFNLFNBQVMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQ3JDLGdDQUFnQyxRQUFRLFFBQVEsQ0FDakQsQ0FBQztJQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDLENBQUMifQ==