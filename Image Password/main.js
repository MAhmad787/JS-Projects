const img = document.getElementById("img");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const msg = document.getElementById("msg");

submit.addEventListener("click", () => {
  if (input.value === "showMe") {
    img.style.filter = "blur(0px)";
  } else if (input.value === "") {
    msg.innerHTML = "<h4>Please Fill the Field</h4>";
    setTimeout(() => msg.remove(), 3000);
  } else {
    msg.innerHTML = "<h4>Wrong Password</h4>";
    setTimeout(() => msg.remove(), 3000);
  }
});
submit.addEventListener("click", () => {
  input.value = "";
});
