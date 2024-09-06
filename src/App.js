import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Sidebar />
          <main className="col-12 col-md-9 offset-md-3 mainPage">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
            </Routes>
          </main>
        </Row>
      </Container>
      <MusicPlayer />
    </BrowserRouter>
  );
}

export default App;
