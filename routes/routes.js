import express from "express";
import userRoutes from "../module/users/users.routes.js";
import tourRouters from "../module/tours/tour.routes.js";
const router = express.Router()

router.use("/users",userRoutes);
router.use("/tours",tourRouters);
  
export default router;