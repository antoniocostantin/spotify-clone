import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./components/Home";
import Album from "./components/Album";
import Favourite from "./components/Favourite";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Sidebar />
          <main className="col-12 col-lg-9 offset-lg-3 mainPage">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/:albumId" element={<Album />}/>
              <Route path="/favourite" element={<Favourite />}/>
            </Routes>
          </main>
        </Row>
      </Container>
      <MusicPlayer />
    </BrowserRouter>
  );
}

export default App;
