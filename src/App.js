import './App.css';
import Header from './Header';
import Counter from './Counter';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  
  useEffect(()=>{
    let time = 0;
  
    let timer = setInterval(() => {
      time++;
      console.log(time)
      if(time >= 5){
        clearInterval(timer)
        setShow(false)
      }
    }, 1000);

  }, [])


  if(show){
    return (
      <div>
        <Header name="Título do Header" links={["Buy", "Contact", "About", "Login"]}></Header>
        <Counter count={0}/>
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
