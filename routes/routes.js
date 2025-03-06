import express from "express";
import userRoutes from "../module/users/users.routes.js";
import tourRoutes from "../module/tours/tour.routes.js";

const router = express.Router()

router.use("/users",userRoutes);
router.use("/tours",tourRoutes);
  
export default router;