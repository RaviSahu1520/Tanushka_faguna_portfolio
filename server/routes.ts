import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

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

  // CV download endpoint - ENHANCED VERSION with all important features
  app.get("/api/download-cv", (req, res) => {
    try {
      // IMPORTANT: Path to your actual PDF resume file
      const cvPath = path.join(process.cwd(), 'attached_assets', 'Tanushka_Faguna_Resume.pdf');

      console.log('Attempting to serve file from:', cvPath); // IMPORTANT: Debug logging

      // IMPORTANT: Check if file exists before serving
      if (!fs.existsSync(cvPath)) {
        console.error('CV file not found at:', cvPath);
        return res.status(404).json({ error: 'CV file not found' });
      }

      // IMPORTANT: Get file stats for proper headers
      const stat = fs.statSync(cvPath);
      console.log('File size:', stat.size, 'bytes'); // IMPORTANT: Debug info

      // IMPORTANT: Set proper headers for PDF download
      res.setHeader('Content-Type', 'application/pdf'); // CRITICAL for PDF files
      res.setHeader('Content-Disposition', 'attachment; filename="Tanushka_Faguna_Resume.pdf"');
      res.setHeader('Content-Length', stat.size); // IMPORTANT for download progress
      res.setHeader('Accept-Ranges', 'bytes'); // IMPORTANT for better download handling
      res.setHeader('Cache-Control', 'no-cache'); // IMPORTANT to prevent caching issues

      // IMPORTANT: Create read stream and handle errors
      const fileStream = fs.createReadStream(cvPath);

      // IMPORTANT: Handle stream errors
      fileStream.on('error', (streamError) => {
        console.error('Error reading file stream:', streamError);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Error reading file' });
        }
      });

      // IMPORTANT: Handle successful streaming
      fileStream.on('open', () => {
        console.log('File stream opened successfully');
      });

      // IMPORTANT: Pipe file to response
      fileStream.pipe(res);

    } catch (error) {
      console.error('Error serving CV:', error);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to download CV' });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
