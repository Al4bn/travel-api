import express from "express";
import userRoutes from "../module/users/users.routes.js";
import tourRoutes from "../module/tours/tour.routes.js";
import bookingRouters from"../module/bookings/booking.routes.js"

const router = express.Router()

router.use("/users",userRoutes);
router.use("/tours",tourRoutes);
router.use("/bookings",);
export default router;