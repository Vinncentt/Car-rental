let name = document.querySelector(
  "body > div > div > div > div.contact-form > div:nth-child(2) > input"
);
let email = document.querySelector(
  "body > div > div > div > div.contact-form > div:nth-child(3) > input"
);
let subject = document.querySelector(
  "body > div > div > div > div.contact-form > div:nth-child(4) > input"
);
let message = document.querySelector(
  "body > div > div > div > div.contact-form > div:nth-child(5) > textarea"
);
let button = document.querySelector(
  "body > div > div > div > div.contact-form > button"
);

button.addEventListener("click", function () {
  swal(
    "success",
    "Name : " +
      name.value +
      "\n" +
      "Email : " +
      email.value +
      "\n" +
      "Subject : " +
      subject.value +
      "\n" +
      "Message : " +
      message.value,
    "success"
  );
});
