import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {count: this.props.count} 
        // Dentro de "constructor" é o único lugar que podemos atribuir state à alguma coisa.
        // Em outros lugares deve-se usar .setState
        this.add = this.add.bind(this)
    }

    add(){
        // Ajustando para uma função - Cria uma "fila" para que seja atualizado da maneira correta
        this.setState((state) =>{ return {count: state.count + 1}})
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