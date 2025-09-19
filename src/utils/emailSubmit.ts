import { sendContact } from "@/lib/apis";
import { getEmailOptions, transporter } from "./emailTransporter";

interface State {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const handleSubmit = async (e: Event, states: State) => {
  e.preventDefault();
  const subject = "Client Inquiry";
  let messageToSend = `\nClient Full Name: ${states.fullName}\nClientEmail: ${states.email}\nClient Message ${states.message} \n`;
  if (!states.fullName || !states.email || !states.message) return;
  else {
    if (states.phone)
      messageToSend = messageToSend + `Clients Phone No ${states.phone}`;
    sendContact(messageToSend);
  }
};
