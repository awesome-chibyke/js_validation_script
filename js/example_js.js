const submitForm = async () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const password = document.querySelector("#password");
  const confrim_password = document.querySelector("#confrim_password");

  //validate the values ['value|className|fieldName|type']
  const validation = await validateModule.callValidator([
    name.value + "|name|Full Name|empty",
    email.value + "|email|Email Address|empty,email",
    phone.value + "|phone|Phone Number|empty,number",
    password.value +
      ":" +
      confrim_password.value +
      "|password|Password|empty,password_match_validation",
  ]);

  validation.status === false
    ? validateModule.handleErrorStatement(
        validation.message,
        "../login",
        "off",
        "no",
        "no"
      )
    : "";
};

document
  .querySelector("#form_submit_button")
  .addEventListener("click", async function () {
    await submitForm();
  });
