const btn = document.querySelector('button');
const modal = document.querySelector('dialog');
const buttonClose = document.querySelector('.close')

btn.onclick = function() {
    this.innerHTML = "<div class='loader'></div>"
    setTimeout(() => {
        this.innerHTML = "Autenticar"
        modal.showModal();
    }, 2000)
} 

buttonClose.onclick = function(){
    modal.close()
}