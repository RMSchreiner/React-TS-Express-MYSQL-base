import express from "express";
import {Router} from "express";
import {saveMessage} from "../controller/saveMessage.controller"

export const routes = (router:Router) => {

router.post("/api/addData", saveMessage);

}