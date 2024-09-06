import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Container fluid>
      <Row>
        <Sidebar />
      </Row>
    </Container>
    </>
  );
}

export default App;
