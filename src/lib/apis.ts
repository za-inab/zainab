export const sendContact = async (subject:string,message: string) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({subject,message}),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
