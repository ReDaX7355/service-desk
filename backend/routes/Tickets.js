import {
  addTicket,
  deleteTicket,
  getAllTickets,
  getTicketsById,
  updateTicket,
} from "../controllers/TicketsController.js";

import Router from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const TicketsRouter = new Router();

TicketsRouter.get("/tickets", authMiddleware, getAllTickets);
TicketsRouter.get("/tickets/:id", authMiddleware, getTicketsById);
TicketsRouter.post("/tickets", authMiddleware, addTicket);
TicketsRouter.put("/tickets", authMiddleware, updateTicket);
TicketsRouter.delete("/tickets/:id", authMiddleware, deleteTicket);

export default TicketsRouter;
