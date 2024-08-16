const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { MongoClient } = require("mongodb");

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// Get all social media from the socialmedia collection
app.get("/api/socialmedia", async (req, res) => {
  try {
    const socialmedia = await getSocialMedia();
    res.json(socialmedia);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch social media" });
  }
});

// Get all projects from the projects collection
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

// Get services data from the services collection
app.get("/api/services", async (req, res) => {
  try {
    const services = await getServices();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// Get reviews data from the reviews collection
app.get("/api/reviews", async (req, res) => {
  try {
    const reviews = await getReviews();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

let db;

// Database connection function
async function connection() {
  if (!db) {
    await client.connect();
    db = client.db("portfolio"); // Select the "portfolio" database
  }
  return db;
}

// Function to get social media data
async function getSocialMedia() {
  const db = await connection();
  const results = await db.collection("socialmedia").find({}).toArray();
  return results;
}

// Function to get projects data
async function getProjects() {
  const db = await connection();
  const results = await db.collection("projects").find({}).toArray();
  return results;
}

// Function to get services data
async function getServices() {
  const db = await connection();
  const result = await db.collection("services").findOne({});
  return result;
}

// Function to get reviews data
async function getReviews() {
  const db = await connection();
  const results = await db.collection("reviews").find({}).toArray();
  return results;
}