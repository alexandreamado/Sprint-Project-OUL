const modal = document.querySelector('dialog');
const dialogInput = document.querySelector('.dialog-input');
const buttonClose = document.querySelector('.close');
const closeErro = document.querySelector('.close-error')
const buttonModal = document.querySelector('.close-modal');
const showErro = document.querySelector('.dialog-incorrect');

// // Restante do código permanece inalterado
// function verificarPIN() {
//   let pinCorreto = gerarPIN();
//   let tentativas = 0;

//   console.log("Bem-vindo ao Verificador de PIN!");

//   while (true) {
//       let input = prompt("Digite um PIN de 4 dígitos:");

//       if (parseInt(input) === pinCorreto) {
//           console.log("Parabéns! Você acertou o PIN!");
//           break;
//       } else {
//           tentativas++;
//           if (parseInt(input) > pinCorreto) {
//               console.log("Tente um valor menor.");
//           } else {
//               console.log("Tente um valor maior.");
//           }

//           let diferenca = Math.abs(pinCorreto - parseInt(input));
//           if (diferenca > 500) {
//               console.log("Você está muito longe. Tente um valor muito maior ou muito menor.");
//           } else if (diferenca > 100) {
//               console.log("Você está longe. Tente um valor um pouco maior ou um pouco menor.");
//           }
//       }
//   }

//   console.log(`Você acertou em ${tentativas} tentativas.`);
// }

// // Chame a função principal
// verificarPIN();

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const pInInputs = document.querySelectorAll("#pin-input input");

  console.log("Botão clicado!"); 

  submitButton.addEventListener("click", function () {
    // Recupera os valores dos inputs
    const userInput = Array.from(pInInputs)
      .map((input) => input.value)
      .join("");

    const pinCorreto = "8994";

    const allFieldsFilled = Array.from(pInInputs).every(
      (input) => input.value.trim() !== ""
    );
    if (allFieldsFilled) {
      this.innerHTML = "<div class='loader'></div>";
      setTimeout(() => {
        if(userInput === pinCorreto){
          this.innerHTML = "Autenticar";
          modal.showModal()
        }else {
          showErro.showModal()
          closeErro.onclick = () => {
            showErro.close();
          }
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
