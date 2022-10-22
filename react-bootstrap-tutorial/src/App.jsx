//Estilos
import reactLogo from "./assets/react.svg";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";

//Componentes
import Formulario from "./assets/components/Formulario";
import Tarjeta from "./assets/components/Tarjeta";
import Navegacion from "./assets/components/Navegacion";
import Productos from "./assets/components/Productos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Navegacion />
        </Container>
      </header>
      <>
        <Formulario />
        <Tarjeta />
        <Productos/>
      </>
    </div>
  );
}

export default App;
