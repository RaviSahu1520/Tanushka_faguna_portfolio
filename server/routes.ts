import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real application, this would serve an actual CV file
    // For now, we'll simulate a CV download
    const cvContent = `
Chandra Dev Pathak
Full Stack / MERN Developer

Contact Information:
Email: chandra.dev.pathak@example.com
LinkedIn: https://linkedin.com/in/chandra-dev-pathak
GitHub: https://github.com/chandra-dev-pathak

Skills:
- React.js, Node.js, Express.js, MongoDB
- TypeScript, JavaScript, HTML5, CSS3
- TailwindCSS, Material-UI, Bootstrap
- Git, GitHub, Vercel, Netlify

Experience:
Full Stack Developer
- Developed responsive web applications using MERN stack
- Implemented modern UI/UX designs with React and TailwindCSS
- Built RESTful APIs and integrated with MongoDB databases
- Deployed applications on cloud platforms

Projects:
1. Ecommerce Website - Full-stack platform with React, Node.js, Express, MongoDB
2. Pokemon Website - Interactive search app with React hooks and API integration
3. Tic Tac Toe Game - Classic game built with React state management

Education:
Bachelor's Degree in Computer Science
Relevant coursework in web development, database management, and software engineering
    `;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', 'attachment; filename="Chandra_Dev_Pathak_CV.txt"');
    res.send(cvContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
