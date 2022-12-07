// Typed Animation
var typed = new Typed(".typedAnimation", {
  strings: ["We Are Digital Waves", "Inspired by the world, created for you"],
  typeSpeed: 60,
  delaySpeed: 100,
  loop: true,
});

//Sweetalert Contact
const sendButton = document.querySelector("#btnSend");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const input = document.querySelectorAll("#email, #subject, #message");

sendButton.addEventListener("click", () => {
  if (email.value == "" || subject.value == "" || message.value == "") {
    Swal.fire("Pesan tidak terkirim!", "Mohon masukkan pesan anda dengan lengkap.", "error");
  } else {
    Swal.fire("Pesan anda terkirim!", "Terima kasih karena telah mengirim pesan.", "success");

    input.forEach((input) => {
      input.value = "";
    });
  }
});

//ScrollToTop
const topButton = document.querySelector("#btnTop");
topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
