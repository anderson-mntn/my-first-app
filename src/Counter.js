import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {count: this.props.count};
        this.add = this.add.bind(this)
    }

    add(){
        this.setState({count: this.state.count + 1}) // Nunca usar .state para mudar o estado, pq muda diretamente
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