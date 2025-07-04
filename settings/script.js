function sorteio() {
  const min = Math.ceil(document.querySelector(".min").value);
  const max = Math.floor(document.querySelector(".max").value);

  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(number);
}
