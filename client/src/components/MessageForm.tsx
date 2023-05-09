import React, { useState } from "react";
import axios from "axios";

export const MessageForm = () => {

const [userID, setUserId] = useState("");
const [message, setMessage] = useState("");
const [responseMessage, setResponseMessage] = useState("");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("/api/addData", {
      userID,
      message,
      responseMessage
    });
    console.log(response.data);
  };

return(
  <form onSubmit={handleSubmit}>
  <label htmlFor="userID">userID</label>
  <input type="text" id="userID" value={userID} onChange={(e) => setUserId(e.target.value)} />

  <label htmlFor="message">Message</label>
  <input type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

  <label htmlFor="responseMessage">responseMessage</label>
  <input type="text" id="responseMessage" value={responseMessage} onChange={(e) => setResponseMessage(e.target.value)} />

  <button type="submit">Add Data</button>
  </form>
);

};

