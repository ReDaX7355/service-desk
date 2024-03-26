import Ticket from "../models/Ticket.js";

const getAllTickets = async (req, res) => {
  const allTickets = await Ticket.find();
  res.json(allTickets);
};

const getTicketsById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "Id not input" });
  }
  const ticket = await Ticket.findById(id);

  res.status(200).json(ticket);
};

const addTicket = async (req, res) => {
  const data = req.body;

  const newTicket = await Ticket.create({
    ...data,
  });

  res.json(newTicket);
};

const updateTicket = (req, res) => {};

const deleteTicket = (req, res) => {};

export { getAllTickets, getTicketsById, addTicket, updateTicket, deleteTicket };
