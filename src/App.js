import './App.css';
import Header from './Header';

function App() {
  return (
    <Header name="Título do Header" links={["Buy", "Contact", "About", "Login"]}></Header>
  );
}

export default App;
