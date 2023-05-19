import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {count: 0} 
        // Dentro de "constructor" é o único lugar que podemos atribuir state à alguma coisa.
        // Em outros lugares deve-se usar .setState
        this.add = this.add.bind(this)
    }

    add(){
        // Ajustando para uma função - Cria uma "fila" para que seja atualizado da maneira correta
        this.setState((state) =>{ return {count: state.count + 1}}, ()=>{
            console.log(this.state)
            localStorage.setItem('state', JSON.stringify(this.state))
        })
    }  

    /*  --- Métodos do ciclo de vida de um componente ---

    - Trava a renderização na tela, mas o estado ainda muda
    shouldComponentUpdate(){
        return false; 
    }

    */ 

    componentDidMount(){
        this.setState(JSON.parse(localStorage.getItem('state')))
    }


    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }

}

export default Counter;