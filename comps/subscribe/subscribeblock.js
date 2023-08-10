import React, { useState } from "react";
import Mailchimp from "@mailchimp/mailchimp_marketing";

const MailchimpClient = new Mailchimp({
  apiKey: "c746450081030b708adf9c20d9260530",
  apiSecret: "16942bea96b24554c82087fb1438e99b",
  region: "us1",
});

const SubscribeBlock = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      // The email address of the user who is subscribing.
      email: email,
    };

    MailchimpClient.lists.subscribe({
      // The ID of the Mailchimp list that you want to subscribe the user to.
      listId: "YOUR_MAILCHIMP_LIST_ID",
      email: data.email,
      // Other optional fields that you can pass to Mailchimp.
      mergeFields: {
        name: "Your Name",
      },
    });
  };

  return (
    <div>
      <input type="email" placeholder="Enter your email address" />
      <button onClick={handleSubmit}>Subscribe</button>
    </div>
  );
};

export default SubscribeBlock;
 //const MailjetClent = new MailjetClient("c746450081030b708adf9c20d9260530", "16942bea96b24554c82087fb1438e99b");
