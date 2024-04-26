/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cart = new Carta();
};
//write your code here
class Carta {
  // simbolos;
  // valores;
  // valor;
  // simbol;
  constructor() {
    const simbolos = ["corazon", "diamante", "pica", "trebol"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let carta = this.seleccionNumero(simbolos, valores);
    this.asignarColor(this.simbol);
    this.asignarSimbolo(this.simbol);
    this.asignarValor(this.valor);
  }
  seleccionNumero(simbolos, valores) {
    this.simbolos = simbolos;
    this.valores = valores;
    this.simbol = Math.floor(Math.random() * this.simbolos.length);
    this.valor = Math.floor(Math.random() * this.valores.length);
    return this.valor, this.simbol;
  }
  asignarColor(simbol) {
    if (
      this.simbolos[simbol] === "corazon" ||
      this.simbolos[simbol] === "diamante"
    ) {
      simboloArriba.style.color = "red";
      numero.style.color = "red";
      simboloAbajo.style.color = "red";
    } else {
      simboloArriba.style.color = "black";
      numero.style.color = "black";
      simboloAbajo.style.color = "black";
    }
  }

  asignarSimbolo(simbol) {
    switch (this.simbolos[simbol]) {
      case "corazon":
        simboloArriba.innerHTML = "♥";
        simboloAbajo.innerHTML = "♥";
        break;
      case "diamante":
        simboloArriba.innerHTML = "♦";
        simboloAbajo.innerHTML = "♦";
        break;
      case "trebol":
        simboloArriba.innerHTML = "♣";
        simboloAbajo.innerHTML = "♣";
        break;
      default:
        simboloArriba.innerHTML = "♠";
        simboloAbajo.innerHTML = "♠";
    }
  }
  asignarValor(valor) {
    console.log("entro a asignar valor", this.valores[valor]);
    numero.innerHTML = this.valores[valor];
  }
}
