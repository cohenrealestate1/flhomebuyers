// @flow
const sendgrid = require("@sendgrid/mail");

export const sendEmail = () => {
  console.log(10);
  sendgrid.setApiKey(
    "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"
  );
  // construct an email
  const email = {
    to: "cohenrealestate1@gmail.com",
    from: "bencohen0806@gmail.com",
    subject: "My first email",
    text: "Hello world",
  };
  // send the email via sendgrid
  sendgrid
    .send(email)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
