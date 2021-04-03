// @flow
const sendgrid = require("@sendgrid/mail");

export const sendEmailLead = (values) => {
  sendgrid.setApiKey(
    "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"
  );
  const {
    email: emailAddress, phoneNumber, address 
  } = values;

  const html = `
    <div>
      <p><b>Email:</b> ${emailAddress}</p>
      <p><b>Phone Number:</b> ${phoneNumber}</p>
      <p><b>Property Address:</b> ${address}</p>
    </div>
  `;

  // construct an email
  const email = {
    to: "cohenrealestate1@gmail.com",
    from: "bencohen0806@gmail.com",
    subject: "New lead",
    html,
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

export const sendEmailContactUs = (values) => {
  sendgrid.setApiKey(
    "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"
  );
  const {
    firstName,
    lastName,
    phoneNumber,
    email: emailAddress,
    freeFormText,
  } = values;

  console.log(firstName, lastName, phoneNumber, emailAddress, freeFormText);

  const html = `
    <div>
      <p><b><u>New inquiry<u/></b><p>
      <p><b>Person:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${emailAddress}</p>
      <p><b>Phone Number:</b> ${phoneNumber}</p>
      <p><b>Question:</b> ${freeFormText}</p>
    </div>
  `;

  console.log(html);

  // construct an email
  const email = {
    to: "cohenrealestate1@gmail.com",
    from: "bencohen0806@gmail.com",
    subject: "New Inquiry",
    html,
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
