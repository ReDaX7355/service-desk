import TicketModel from "../models/Ticket.js";

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
      res.status(400).json({ message: "Id not input or invalid format" });
    }
    const ticket = await TicketModel.findById(id);
    if (!ticket) {
      res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Internal server" });
  }
};

const addTicket = async (req, res) => {
  try {
    const data = req.body;

    const newTicket = await TicketModel.create({
      ...data,
    });

    if (!newTicket) {
      res.status(404).json({ message: "Ticket not created" });
    }

    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Internal server" });
  }
};

const updateTicket = async (req, res) => {
  try {
    const data = req.body;

    if (!data._id) {
      res.status(400).json({ message: "Not data for updated!" });
    }

    const newTicket = await TicketModel.findByIdAndUpdate(data._id, data, {
      new: true,
    });

    if (!newTicket) {
      res.status(404).json({ message: "Ticket not updated" });
    }

    res.status(200).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Internal server" });
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

    const ticket = await TicketModel.findByIdAndDelete(id);

    if (!ticket) {
      res.status(404).json({
        message: `Ticket not found`,
      });
    }

    res.status(200).json({
      message: `Ticket id - ${id} has been deleted!`,
    });
  } catch (error) {
    res.status(500).json({
      message: `Internal server`,
    });
  }
};

export { getAllTickets, getTicketsById, addTicket, updateTicket, deleteTicket };
