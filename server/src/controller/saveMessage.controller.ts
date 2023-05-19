
import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { DataEntity } from "../entities/Message";

export const saveMessage = async (req: Request, res: Response) => {
  try {
    const {message, messageResponse} = req.body;
    console.log("Received request body:", req.body);
    
    if (!message || !messageResponse) {
      return res.status(400).send({ error: "Invalid message object" });
    }
    const repository = AppDataSource.getRepository(DataEntity);

    await repository.save({
      message,
      messageResponse,
    });
    res.status(201).send({ message: "Data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to save message" });
  }
};