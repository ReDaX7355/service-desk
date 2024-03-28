import Ticket from "../models/Ticket.js";

const getAllTickets = async (req, res) => {
  try {
    const allTickets = await Ticket.find();
    res.json(allTickets);
  } catch (error) {
    console.log(error);
  }
};

const getTicketsById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Id not input" });
    }
    const ticket = await Ticket.findById(id);

    res.status(200).json(ticket);
  } catch (error) {
    console.log(error);
  }
};

const addTicket = async (req, res) => {
  try {
    const data = req.body;

    const newTicket = await Ticket.create({
      ...data,
    });

    res.status(201).json(newTicket);
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (req, res) => {
  try {
    const data = req.body;

    if (!data._id) {
      res.status(400).json({ message: "Not data for updated!" });
    }

    const newTicket = await Ticket.findByIdAndUpdate(data._id, data, {
      new: true,
    });

    res.status(200).json(newTicket);
  } catch (error) {
    console.log(error);
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    if (!id) {
      res.status(400).json({
        message: `Not input id ticket`,
      });
    }

    const ticket = await Ticket.findByIdAndDelete(id);

    res.status(200).json({
      message: `Ticket id - ${id} has been deleted!`,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllTickets, getTicketsById, addTicket, updateTicket, deleteTicket };
