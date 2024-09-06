import { useEffect } from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { geTArtistAction } from "../redux/actions";
import TrackList from "./TrackList";

const Album = () => {
  const params = useParams();
  const album = useSelector((state) => state.artist.results);
  const dispatch = useDispatch();
  console.log(params.albumId);

  useEffect(() => {
    dispatch(geTArtistAction(params.albumId));
    console.log("vedim", album);
  }, []);
  
  useEffect(() => {
    dispatch(geTArtistAction(params.albumId));
    console.log("vedim", album);
  }, [params]);

  return (
    <>
      <Container fluid>
        <Row className="mt-3 lastGallery">
          <Col xs={12} md={3}>
            <img src={album.cover_xl} alt="cover" className="img-fluid" />
            <h3 className="text-white-50 mt-2 ">{album.title}</h3>
          </Col>
          <Col>
            <ListGroup>
              
                  {album !== undefined && (<>{album.tracks.data.map((track) => {
                    return <TrackList track={track} />;
                  })}</>)}
               
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Album;
