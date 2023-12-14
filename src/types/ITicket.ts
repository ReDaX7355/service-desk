import IMessage from './IMessage';

interface ITicket {
  id: string;
  ticket_number: number;
  title: string;
  description: string;
  applicant_name: string;
  created_at: string;
  closed_at: string;
  type_request: string;
  assigned_to: string;
  priority: string;
  completed: boolean;
  messages: IMessage[];
}

export default ITicket;
