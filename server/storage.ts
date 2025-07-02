import { InsertContact } from "@shared/schema";

export interface IStorage {
  // Contact form submissions
  saveContact(contact: InsertContact): Promise<void>;
  getContacts(): Promise<InsertContact[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private contacts: InsertContact[] = [];

  async saveContact(contact: InsertContact): Promise<void> {
    this.contacts.push(contact);
  }

  async getContacts(): Promise<InsertContact[]> {
    return [...this.contacts];
  }
}

export const storage = new MemStorage();