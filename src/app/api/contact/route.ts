import { getEmailOptions, transporter } from "@/utils/emailTransporter";

export const POST = async (req: Request) => {
  const body = await req.json();
  console.log("req body", body);
  try {
    const message = transporter.sendMail(
      getEmailOptions(body.subject, body.message))
      console.log('message: ', message.messageId);
  } catch (error) {}
  return new Response(
    JSON.stringify({ success: true, message: "Email Sent Successfully" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
