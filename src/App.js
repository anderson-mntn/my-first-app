import './App.css';
import Header from './Header';
import Counter from './Counter';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  
  // componentWillUnmount()
  useEffect(()=>{
    
    let time = 0;
    let timer = setInterval(() => {
      time++;
      if(time >= 6){
        clearInterval(timer);
        setShow(false);
        console.log("Contador removido!")
      } else {
        console.log(time)
      }
    }, 1000)

  },[])


  if(show){
    return (
      <div>
        <Header name="Título do Header" links={["Buy", "Contact", "About", "Login"]}></Header>
        <Counter count={3}/>
      </div>
    )
  } else {
    return(
      <div>
        Counter removed!
      </div>
    )
  }

}


export default App;
