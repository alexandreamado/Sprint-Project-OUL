const modal = document.querySelector("dialog");
const dialogInput = document.querySelector(".dialog-input");
const buttonClose = document.querySelector(".close");
const closeErro = document.querySelector(".close-error");
const buttonModal = document.querySelector(".close-modal");
const showErro = document.querySelector(".dialog-incorrect");
const pinWarning = document.querySelector(".pin-warning");

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const pInInputs = document.querySelectorAll("#pin-input input");

  submitButton.addEventListener("click", function () {
    // Recupera os valores dos inputs
    const userInput = Array.from(pInInputs)
      .map((input) => input.value)
      .join("");

    const pinCorrect = "1234";

    if (userInput > pinCorrect) {
      pinWarning.innerHTML = `<small style="text-decoration: underline">Numero Maior: ${userInput}</small>`;
    } else {
      pinWarning.innerHTML = `<small style="text-decoration: underline">Numero Menor: ${userInput}</small>`;
    }

    // Verifica se todos os campos foram preenchidos
    const allFieldsFilled = Array.from(pInInputs).every(
      (input) => input.value.trim() !== ""
    );
    if (allFieldsFilled) {
      this.innerHTML = "<div class='loader'></div>";
      setTimeout(() => {
        if (userInput === pinCorrect) {
          this.innerHTML = "Autenticar";
          modal.showModal();
        } else {
          showErro.showModal();
          closeErro.onclick = () => {
            showErro.close();
          };
          this.innerHTML = "Autenticar";
        }
      }, 2000);
    } else {
      dialogInput.showModal();
    }
    buttonClose.onclick = function () {
      modal.close();
    };

    buttonModal.onclick = function () {
      dialogInput.close();
    };
  });
});
