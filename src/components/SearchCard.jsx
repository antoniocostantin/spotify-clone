import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchCard({ songDetail }) {


  return (
      <Col xs={12} md={4} xl={3}>
        <Link to={`/${songDetail.album.id}`} className="text-decoration-none">
        <Card border="dark" bg="dark" text="light" className="h-100">
          <Card.Img
            variant="top"
            className="object-fit-cover w-100"
            src={songDetail.album.cover_xl}
          />
          <Card.Body>
            <Card.Title>
              <span className="text-white-50">
                {songDetail.title_short}
              </span>
            </Card.Title>
            <Card.Text>Album - {songDetail.album.title}</Card.Text>
            <Card.Text>Artist - {songDetail.artist.name}</Card.Text>
          </Card.Body>
        </Card></Link>
      </Col>
  );
}

export default SearchCard;
