// @flow
import { type FormValuesType } from "../components/form/initial-values";
import { type ContactUsFormValues } from "../pages/contact-us/initial-values";

const sendgrid = require("@sendgrid/mail");

export const sendEmailLead = (values: FormValuesType) => {
  sendgrid.setApiKey(
    "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"
  );
  const {
    formWide: { email: emailAddress, phoneNumber, address },
    step2: { city, state, zip },
    step3: { firstName, lastName },
    step4: {
      numBeds,
      numBaths,
      howLongOwned,
      condition,
      repairsNeeded,
      isOccupied,
      isListed,
    },
    step5: { needToSellFast, whySelling, ultimateGoal },
  } = values;

  const html = `
    <div>
      <p><b><u>Personal Details<u/></b><p>
      <p><b>Person:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${emailAddress}</p>
      <p><b>Phone Number:</b> ${phoneNumber}</p>
      <p><b>Property Address:</b> ${address}</p>
      <p><b>Property City:</b> ${city}</p>
      <p><b>Property State:</b> ${state}</p>
      <p><b>Property Zip Code:</b> ${zip}</p>
      <p><b><u>Property Details</u></b></p>
      <p><b>Number of bedrooms:</b> ${numBeds}</p>
      <p><b>Number of bathrooms:</b> ${numBaths}</p>
      <p><b>How long they have owned it:</b> ${howLongOwned}</p>
      <p><b>Property condition:</b> ${condition}</p>
      <p><b>Are repairs needed:</b> ${repairsNeeded}</p>
      <p><b>Is it occupied:</b> ${isOccupied}</p>
      <p><b>Is it listed elsewhere:</b> ${isListed}</p>
      <p><b>Do you need to sell fast?:</b> ${needToSellFast}</p>
      <p><b>Why are you selling your house?:</b> ${whySelling}</p>
      <p><b>What is your ultimate goal with this house?:</b> ${ultimateGoal}</p>
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

export const sendEmailContactUs = (values: ContactUsFormValues) => {
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
