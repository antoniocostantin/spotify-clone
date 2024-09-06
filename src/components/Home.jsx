import { Col, Row } from "react-bootstrap";
import Gallery from "./Gallery";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <Row>
        <Col xs={10}>
            <Gallery playlist={'Rock classic'} artist={'Queen'} key={1} />
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
            <Gallery playlist={'Pop culture'} artist={'Lana del rey'} key={2} />
        </Col>
      </Row>
      <Row>
        <Col xs={10} className='lastGallery'>
            <Gallery playlist={'#Hip-Hop'} artist={'Eminem'} key={3} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
