
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a  Mundo Digital '}/>
    </>
  );
}

export default App;