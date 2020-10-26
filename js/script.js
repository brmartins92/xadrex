/*Variaveis Globais */

var tabuleiro = [{}];
var tabuleiroPlayer = [{}];

/*Carregamento */

document.addEventListener("DOMContentLoaded", (event) => {
  //the event occurred
  preenchimentoTabuleiro();
  preenchimentoTabuleiroPlayer();
});

/*Functions */
preenchimentoTabuleiro = () => {
  tabuleiro = {
    T1P2: {
      linha: 1,
      coluna: 1,
      peca: "T1P2",
      player: 2,
      nome: "torre",
    },
    C1P2: {
      linha: 1,
      coluna: 2,
      peca: "C1P2",
      player: 2,
      nome: "cavalo",
    },
    B1P2: {
      linha: 1,
      coluna: 3,
      peca: "B1P2",
      player: 2,
      nome: "bispo",
    },
    D1P2: {
      linha: 1,
      coluna: 4,
      peca: "D1P2",
      player: 2,
      nome: "rainha",
    },
    R1P2: {
      linha: 1,
      coluna: 5,
      peca: "R1P2",
      player: 2,
      nome: "rei",
    },
    B2P2: {
      linha: 1,
      coluna: 6,
      peca: "B2P2",
      player: 2,
      nome: "bispo",
    },
    C2P2: {
      linha: 1,
      coluna: 7,
      peca: "C2P2",
      player: 2,
      nome: "cavalo",
    },
    T2P2: {
      linha: 1,
      coluna: 7,
      peca: "T2P2",
      player: 2,
      nome: "torre",
    },
    P1P2: {
      linha: 2,
      coluna: 1,
      peca: "P1P2",
      player: 2,
      nome: "piao",
    },
    P2P2: {
      linha: 2,
      coluna: 2,
      peca: "P2P2",
      player: 2,
      nome: "piao",
    },
    P3P2: {
      linha: 2,
      coluna: 3,
      peca: "P3P2",
      player: 2,
      nome: "piao",
    },
    P4P2: {
      linha: 2,
      coluna: 4,
      peca: "P4P2",
      player: 2,
      nome: "piao",
    },
    P5P2: {
      linha: 2,
      coluna: 5,
      peca: "P5P2",
      player: 2,
      nome: "piao",
    },
    P6P2: {
      linha: 2,
      coluna: 6,
      peca: "P6P2",
      player: 2,
      nome: "piao",
    },
    P7P2: {
      linha: 2,
      coluna: 7,
      peca: "P7P2",
      player: 2,
      nome: "piao",
    },
    P8P2: {
      linha: 2,
      coluna: 8,
      peca: "P8P2",
      player: 2,
      nome: "piao",
    },

    //JOGADOR 1//

    T1P1: {
      linha: 8,
      coluna: 1,
      peca: "T1P1",
      player: 1,
      nome: "torre",
    },
    C1P1: {
      linha: 8,
      coluna: 2,
      peca: "C1P1",
      player: 1,
      nome: "cavalo",
    },
    B1P1: {
      linha: 8,
      coluna: 3,
      peca: "B1P1",
      player: 1,
      nome: "bispo",
    },
    D1P1: {
      linha: 8,
      coluna: 4,
      peca: "D1P1",
      player: 1,
      nome: "rainha",
    },
    R1P1: {
      linha: 8,
      coluna: 5,
      peca: "R1P1",
      player: 1,
      nome: "rei",
    },
    B2P1: {
      linha: 8,
      coluna: 6,
      peca: "B2P1",
      player: 1,
      nome: "bispo",
    },
    C2P1: {
      linha: 8,
      coluna: 7,
      peca: "C2P1",
      player: 1,
      nome: "cavalo",
    },
    T2P1: {
      linha: 8,
      coluna: 8,
      peca: "T2P1",
      player: 1,
      nome: "torre",
    },
    P1P1: {
      linha: 7,
      coluna: 1,
      peca: "P1P1",
      player: 1,
      nome: "piao",
    },
    P2P1: {
      linha: 7,
      coluna: 2,
      peca: "P2P1",
      player: 1,
      nome: "piao",
    },
    P3P1: {
      linha: 7,
      coluna: 3,
      peca: "P3P1",
      player: 1,
      nome: "piao",
    },
    P4P1: {
      linha: 7,
      coluna: 4,
      peca: "P4P1",
      player: 1,
      nome: "piao",
    },
    P5P1: {
      linha: 7,
      coluna: 5,
      peca: "P5P1",
      player: 1,
      nome: "piao",
    },
    P6P1: {
      linha: 7,
      coluna: 6,
      peca: "P6P1",
      player: 1,
      nome: "piao",
    },
    P7P1: {
      linha: 7,
      coluna: 7,
      peca: "P7P1",
      player: 1,
      nome: "piao",
    },
    P8P1: {
      linha: 7,
      coluna: 8,
      peca: "P8P1",
      player: 1,
      nome: "piao",
    },
  };
};

preenchimentoTabuleiroPlayer = () => {
  let tabuleiroAux = Object.values(tabuleiro);
  for (let index = 0; index < tabuleiroAux.length; index++) {
    let nomePos = tabuleiroAux[index].linha + "" + tabuleiroAux[index].coluna;
    tabuleiroPlayer[nomePos] = tabuleiroAux[index].player;
  }
  console.log(tabuleiroPlayer);
};

andarTorre = (torre) => {
  console.log(torre);

  let linha = torre.linha;
  let coluna = torre.coluna;
  let linhaAux;

  linhaAux = linha + 1;
  for (let index = linhaAux; index <= 8; index++) {
    let Ndiv = "#m" + index + "" + coluna + "";

    if ($(Ndiv).html()) {
      //loop para saber da casa
    } else {
      $(Ndiv).html("");
      $(Ndiv).append(
        "<div class='moverPeca casa' onClick='clique2(58)' </div>"
      );
    }
  }

  linhaAux = linha - 1;
  for (let index = linhaAux; index >= 1; index--) {
    let Ndiv = "#m" + index + "" + coluna + "";
    if ($(Ndiv).html()) {
      if (tabuleiroPlayer[index + "" + coluna] != torre.player) {
        let pecaInimiga = $(Ndiv).html();
        $(Ndiv).html("");
        $(Ndiv).append(
          "<div class='moverPeca casa' onClick='clique2(58)'> " +
            pecaInimiga +
            "</div>"
        );
      }
    } else {
      $(Ndiv).html("");
      $(Ndiv).append(
        "<div class='moverPeca casa' onClick='clique2(58)'> </div>"
      );
    }
  }
};

clique2 = (casa, peca) => {
  //\""+value.profissional_id+"\",\""+idMedico+"\"
  //console.log(58 , peca );

  $("#m" + casa).html("");

  $("#m" + casa).append(
    "<button class='peca' onClick= 'cliquePeca('T2P1')'  >&#9814;</button>"
  );

  $("#m" + 88).html("");
};

cliquePeca = (peca) => {
  if (tabuleiro[peca].nome == "torre") {
    andarTorre(tabuleiro[peca]);
    return true;
  }
};

/*
var pecas = {
  torre1: {
    name: 'Torre 1'
  },
  torre2: {
    name: 'Torre 2'
  }
}

console.log(JSON.stringify(pecas));
console.log(JSON.stringify(Object.values(pecas)))

Object.values(pecas).map((peca) => { console.log(peca) })

console.log(pecas['torre1']);
*/
