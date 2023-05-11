
import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { DataEntity } from "../entities/Message";

export const saveMessage = async (req: Request, res: Response) => {
  try {
    const message = req.body.message;
    
    if (!message.userID || !message.message || !message.responseMessage) {
      return res.status(400).send({ error: "Invalid message object" });
    }
    const repository = AppDataSource.getRepository(DataEntity);

    await repository.save({
      userID: message.userID,
      message: message.message,
      responseMessage: message.responseMessage,
    });
    res.status(201).send({ message });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Unable to save message" });
  }
};