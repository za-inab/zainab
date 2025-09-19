import { getEmailOptions, transporter } from "@/utils/emailTransporter";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    const message = await transporter.sendMail(
      getEmailOptions(body.subject, body.message)
    );

    if (message.messageId) {
      return new Response(
        JSON.stringify({ success: true, message: "Email Sent Successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Internal Server Error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error: Error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
