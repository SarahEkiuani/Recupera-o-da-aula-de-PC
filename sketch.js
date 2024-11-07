//Maquiagens Marcas E Produtos

//MariMaria Makeup,+15,Base E Corretivo
//Fran,LIVRE,Gloss
//boca Rosa,+15,Base
//Mac,LIVRE,Batom
//Dior,+15,Blush
//Ruby Rose,Delineador Líquido
//Chanel, Pó

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de Maquiagens Marcas E Produtos");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de Maquiagem?");
  campoAventura = createCheckbox("Gosta de Produtos e Marcas famosas?");
}

function draw() {
  background("purple");
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
    if (idade >= 14) {
      return "MariMaria Makeup, Base E Corretivo";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Fran,Gloss";          
        } else{
         return "Boca Rosa,Base";
        }
      } else {
        if (gostaDeFantasia) {
          return "Ruby Rose, Delineador Líquido";
        } else {
          return "Chanel, Pó";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Mac,Batom";
    } else {
      return "Dior,Blush";
    }
  }
}
