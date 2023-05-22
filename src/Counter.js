import React, {useEffect, useState} from "react";


function Counter(props){

    const [count, setCount] = useState(props.count) // or useState(0) - Gerenciamento de estado do componente
    

    // Gerenciando estados

    // useEffect é executado sempre que um estado for atualizado

    // useEffect(() => {}) atualiza qualquer estado que for modificado e executa a função descrita dentro - componentDidUpdate() sem especificar estado (atualizar pra qualquer coisa)

    // useEffect(() => {}, [nomeDoEstado]) atualiza apenas para o estado passado no array - componentDidUpdate() atualiza quando o estado especificado for alterado

    // useEffect(() => {}, []) executa uma unica vez - componentDidMount()


    useEffect(()=>{
        setCount(parseInt(localStorage.getItem('count')));
    }, [])

    

    useEffect(()=>{
        document.title = count;
        localStorage.setItem('count', count)
    },[count])
 

    function add(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}



  
// class Counter extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {count: 0} 
//         // Dentro de "constructor" é o único lugar que podemos atribuir state à alguma coisa.
//         // Em outros lugares deve-se usar .setState
//         this.add = this.add.bind(this)
//     }

//     add(){
//         // Ajustando para uma função - Cria uma "fila" para que seja atualizado da maneira correta
//         this.setState((state) =>{ return {count: state.count + 1}}, ()=>{
//             console.log(this.state)
//             localStorage.setItem('state', JSON.stringify(this.state))
//         })
//     }  

//     /*  --- Métodos do ciclo de vida de um componente ---

//     - Trava a renderização na tela, mas o estado ainda muda
//     shouldComponentUpdate(){
//         return false; 
//     }

//     - Resgatando state do localStorage. Caso utilize fetch usaremos aqui
//     componentDidMount(){
//         this.setState(JSON.parse(localStorage.getItem('state')))
//     }

//     Usado quando componente sai da tela
//     componentWillUnmount(){

//     }

//     */ 


//     render(){
//         return(
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>Add</button>
//             </div>
//         )
//     }

// }

export default Counter;