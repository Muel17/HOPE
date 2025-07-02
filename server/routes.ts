import { Request, Response, Router } from "express";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

const router = Router();

// Contact form submission endpoint
router.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const validatedData = insertContactSchema.parse(req.body);
    await storage.saveContact(validatedData);
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Failed to send message" 
    });
  }
});

// Get all contacts (for admin purposes)
router.get("/api/contacts", async (req: Request, res: Response) => {
  try {
    const contacts = await storage.getContacts();
    res.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ error: "Failed to retrieve contacts" });
  }
});

export default router;