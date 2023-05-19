import './App.css';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header name="Título do Header" links={["Buy", "Contact", "About", "Login"]}></Header>
      <Counter count={7}/>
    </div>
  );
}

export default App;
