import express from "express";
import { createTour,getTours } from "./tour.controller.js";


const router = express.Router();

router.post("/",createTour);
// router.get("/:id",getTour);
//get All tours

router.get("/",getTours)

//get single tour

// router.get("/:tourId")

//update tour

// router.patch("/tourdId")

//delete tour

// router.delete("/tourId")


export default router;
