let dollCanvas = document.getElementById("dollCanvas");
context = dollCanvas.getContext("2d");

if (!context) {
  throw new Error("Esse navegador não suporta HTML5 canvas");
}

function changeAlpha(colorCanvas){ 
  let choices = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]
  let arraySize = choices.length 
  let randomNumber = Math.floor(Math.random() * arraySize);
  let randomReturn = choices[randomNumber];
  //context.stroke();

  if (randomReturn <= 5){
    console.log(randomReturn, ", NÃO está bom!")
  }else if (randomReturn >= 6 && randomReturn <=8){
    console.log(randomReturn, ", ESTÁ quase bom!")

  }else if(randomReturn >=9 && randomReturn <=10){
    console.log(randomReturn, ", ESTÁ bom!")
  }
  return colorCanvas+(randomReturn*25).toString(16);
}

// setando o tamanho do canvas
dollCanvas.width  = 400;
dollCanvas.height = 300;

// tamanho da linha
context.lineWidth = 6;
context.translate(10, 100);


// cabeça
context.beginPath();
context.arc(200, 50, 30, 0, Math.PI * 2, true);
context.fillStyle  = changeAlpha("#00FF00");
context.strokeStyle = context.fillStyle;
context.fill();
context.stroke();

// corpo
context.beginPath();
context.strokeStyle = changeAlpha("#00FF00");
context.moveTo(200, 80);
context.lineTo(200, 180);
context.stroke();

// braços
context.beginPath(); 
context.strokeStyle = changeAlpha("#00FF00");

// esquerda 
context.moveTo(200, 80);
context.lineTo(150, 130);
context.stroke();

// direita
context.beginPath(); 
context.strokeStyle = changeAlpha("#00FF00");
context.moveTo(200, 80);
context.lineTo(250, 130);
context.stroke();

// pernas

//direita
context.beginPath(); 
context.strokeStyle = changeAlpha("#00FF00");
context.moveTo(200, 180);
context.lineTo(170, 240);
context.stroke();
//esquerda
context.beginPath(); 
context.strokeStyle = changeAlpha("#00FF00");
context.moveTo(200, 180);
context.lineTo(220, 240);
context.stroke();

/*
function mudaCor(){
  let choices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let arraySize = choices.length
  let randomNumber = Math.floor(Math.random() * arraySize);
  let randomReturn = choices[randomNumber];

  if (randomReturn <= 5){
    console.log(randomReturn, ", não está bom")
  }else if (randomReturn >= 6 && randomReturn <=8){
    console.log(randomReturn, ", está quase bom")

  }else if(randomReturn >=9 && randomReturn <=10){
    console.log(randomReturn, ", está bom")
  }
}     

var repeticao;
var qtdRepeticao = 0;

for(var repeticao = 0; repeticao <= qtdRepeticao; repeticao++){
  mudaCor();
}*/
