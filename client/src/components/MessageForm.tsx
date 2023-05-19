import React, { useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
})

export const MessageForm = () => {

const [message, setMessage] = useState("");
const [messageResponse, setMessageResponse] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
    const response = await api.post("/api/addData", {
      message,
      messageResponse,
    });
    console.log(response.data);
   } catch (error) {
    console.error(error);
  }
  };

return(
  <form onSubmit={handleSubmit}>

  <label htmlFor="message">Message</label>
  <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

  <label htmlFor="messageResponse">responseMessage</label>
  <input type="text" id="messageResponse" value={messageResponse} onChange={(e) => setMessageResponse(e.target.value)} />

  <button type="submit">Add Data</button>
  </form>
);

};

