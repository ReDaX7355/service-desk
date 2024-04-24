import { Schema, model } from "mongoose";

const TicketSchema = new Schema({
  ticket_number: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  applicant_name: { type: String, required: true },
  created_at: { type: String, required: true },
  closed_at: { type: String },
  user_id: { type: Number },
  type_request: { type: String, required: true },
  assigned_to: { type: String },
  priority: { type: String },
  completed: { type: Boolean, required: true },
  messages: [
    {
      message_id: { type: String },
      timestamp: { type: String },
      author: { type: String },
      visible_to: { type: String },
      massage: { type: String },
    },
  ],
});

export default model("Tickets", TicketSchema);
