/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Container, Row } from "react-bootstrap";
import SearchCard from "./SearchCard";

function Search({searchedSongs}) {

  return (
    <>
      <Container fluid className="mt-5">
        {searchedSongs.length > 2 && (
          <>
            <Row className="g-2" xs={{ cols: 1 }} md={{cols:3}}>
              <Col>
                <Card border="dark" bg="dark" text="light" className="h-100">
                  <Card.Img
                    variant="top"
                    className="object-fit-cover w-100"
                    src={searchedSongs[0].artist.picture_xl}
                  />
                  <Card.Body>
                    <Card.Title>
                      <span className="text-white-50">
                        {searchedSongs[0].artist.name}
                      </span>
                    </Card.Title>
                    <Card.Text>Artist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="dark" bg="dark" text="light" className="h-100">
                  <Card.Img
                    variant="top"
                    className="object-fit-cover w-100"
                    src={searchedSongs[0].album.cover_xl}
                  />
                  <Card.Body>
                    <Card.Title>
                      <span className="text-white-50">
                        {searchedSongs[0].album.title}
                      </span>
                    </Card.Title>
                    <Card.Text>Album</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card border="dark" bg="dark" text="light" className="h-100">
                  <Card.Img
                    variant="top"
                    className="object-fit-cover w-100"
                    src={searchedSongs[1].album.cover_xl}
                  />
                  <Card.Body>
                    <Card.Title>
                      <span className="text-white-50">
                        {searchedSongs[1].album.title}
                      </span>
                    </Card.Title>
                    <Card.Text>Album</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <h2 className="text-light my-3">Results:</h2>
              </Col>
            </Row>
            <Row className="g-3 lastGallery w-100">
              {searchedSongs.map((s) => {
                return <SearchCard songDetail={s} key={s.id} />;
              })}
            </Row>
          </>
        )}
      </Container>
    </>
  );
}

export default Search;
