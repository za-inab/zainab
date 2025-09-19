import { sendContact } from "@/lib/apis";

interface State {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const handleSubmit = async (states: State) => {
  const subject = "Client Inquiry";
  let messageToSend = `Client Full Name: ${states.fullName} \nClientEmail: ${states.email} \nClient Message ${states.message}  \n`;
  if (!states.fullName || !states.email || !states.message) return;
  else {
    if (states.phone)
      messageToSend = messageToSend + `Clients Phone No ${states.phone}`;
    try {
      const res = await sendContact(subject, messageToSend);
      return await res.json();
    } catch (error: unknown) {
      console.error('error: ', error);
      return { success: false, message: "Failed to send email" };
    }
  }
};
