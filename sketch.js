// fantasia, terror, comédia

// Sonic 3, Livre, fantasia, comédia
// Era do Gelo 1,Livre, fantasia, comédia
// Jurassic Park, 12, fantasia, terror
// Exorcismo, 16, terror, fantasia
// Thor Ragnarok, 12, comédia, fantasia
// Um Filme Minecraft, Livre, comédia, fantasia

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
    createCanvas(400, 400);
    createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}
  
  function draw() {
   background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 16) {
      return "O menino que descobriu o vento";
    } else {
      if (idade <= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Thor Ragnarok";          
        } else{
         return "Jurassic Park";
        }
      } else {
        if (gostaDeFantasia) {
          return "Era do Gelo 1";
        } else {
          return "Sonic 3";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Um Filme Minecraft";
    }
      if (idade = 16) {
          return " Exorxismo "
