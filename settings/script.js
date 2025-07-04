function sorteio() {
  const min = Math.ceil(document.querySelector(".min").value);
  const max = Math.floor(document.querySelector(".max").value);//esse Math é obrigatório

  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(number);
}
