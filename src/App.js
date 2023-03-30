import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";


function App() {

  return (
    <>
    <div>
      <NavBar />

      <ItemListContainer greeting= "Welcome to my e-commerce"/>
    </div>
    </>

  );
}

export default App;
