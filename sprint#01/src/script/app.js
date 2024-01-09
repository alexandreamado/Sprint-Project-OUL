/**
 * Documentação do Código
 */

// Seleção de elementos do DOM
const modal = document.querySelector("dialog");
const dialogInput = document.querySelector(".dialog-input");
const buttonClose = document.querySelector(".close");
const closeErro = document.querySelector(".close-error");
const buttonModal = document.querySelector(".close-modal");
const showErro = document.querySelector(".dialog-incorrect");
const pinWarning = document.querySelector(".pin-warning");

// Evento que aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleção do botão de envio e dos campos de PIN
  const submitButton = document.getElementById("submit");
  const pInInputs = document.querySelectorAll("#pin-input input");

  // Evento de clique no botão de envio
  submitButton.addEventListener("click", function () {
    
    // Recuperação dos valores dos campos de PIN
    const userInput = Array.from(pInInputs)
      .map((input) => input.value)
      .join("");

    // PIN correto a ser verificado
    const pinCorrect = "1234";

    // Verificação se o PIN inserido é maior ou menor que o correto, fornecendo feedback
    if (userInput > pinCorrect && userInput < 2000) {
      pinWarning.innerHTML = `<small style="text-decoration: underline">Número Maior: ${userInput}
      , O Proximo valor deve ser Menor</small>`;
    } else if(userInput > pinCorrect || userInput >= 2000) {
      pinWarning.innerHTML = `<small style="text-decoration: underline">Número Muito Maior,: ${userInput}
      , O proximo valor deve ser muito Menor</small>`;
    }else if(userInput < pinCorrect){
      pinWarning.innerHTML = `<small style="text-decoration: underline">Número Muito Menor,: ${userInput}
      , O proximo valor deve ser Maior</small>`;
    }

    // Verificação se todos os campos foram preenchidos
    const allFieldsFilled = Array.from(pInInputs).every(
      (input) => input.value.trim() !== ""
    );

    // Lógica de processamento e exibição de diálogos
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

    // Eventos de fechamento de diálogos
    buttonClose.onclick = function () {
      modal.close();
    };

    buttonModal.onclick = function () {
      dialogInput.close();
    };
  });
});
