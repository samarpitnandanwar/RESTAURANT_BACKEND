import express from "express";
import {sendReservation} from "../controller/reservation.js";
const router = express.Router();

router.get("/send", sendReservation);

export default router
