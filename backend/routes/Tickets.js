import {
  addTicket,
  deleteTicket,
  getAllTickets,
  getTicketsById,
  updateTicket,
} from "../controllers/TicketsController.js";

import Router from "express";

const TicketsRouter = new Router();

TicketsRouter.get("/tickets", getAllTickets);
TicketsRouter.get("/tickets/:id", getTicketsById);
TicketsRouter.post("/tickets", addTicket);
TicketsRouter.put("/tickets", updateTicket);
TicketsRouter.delete("/tickets/:id", deleteTicket);

export default TicketsRouter;
