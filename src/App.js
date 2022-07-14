//Crie um component de class
import React, {Component} from "react";
class App extends Component{
  // arrow function:
  // nomedafuncao = () => {
  //   return <h2>Mensagem pela Arrow function</h2>
  // }

  // Crie uma arrow function que receba uma mensagem e exiba na tela
  treinandoArrowFunction = (msg) => {
    return <h3>{msg}</h3>
  }
  
  // Crie uma arrow function que retorne o dobro de um número e exiba na tela
  dobroDoNumero = (x) => {
    return <p>O dobro do número escolhido é: {x * 2}</p>
  }

  render(){
    return(
      <>
      <h1>Desafio de Arrow Function</h1>
      {this.treinandoArrowFunction("Estou aprendendo como faz uma Arrow Function.")}
      {this.dobroDoNumero(10)}
      </>
    )
  }
}

export default App;
