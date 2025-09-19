import { sendContact } from "@/lib/apis";

interface State {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const handleSubmit = async (e: Event, states: State) => {
  e.preventDefault();
  const subject = "Client Inquiry";
  let messageToSend = `Client Full Name: ${states.fullName} \nClientEmail: ${states.email} \nClient Message ${states.message}  \n`;
  if (!states.fullName || !states.email || !states.message) return;
  else {
    if (states.phone)
      messageToSend = messageToSend + `Clients Phone No ${states.phone}`;
    await sendContact(subject, messageToSend);
  }
};
