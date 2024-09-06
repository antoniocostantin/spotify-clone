import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Track from "./Track";

const Favourite = () => {
  const favourites = useSelector((s) => s.favourite.list);
  const dispatch = useDispatch();

  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://striveschool-api.herokuapp.com/api/deezer/track/";

  const fetchSong = async (query) => {
    try {
      const response = await fetch(URL + query);
      if (response.ok) {
        const data = await response.json();
        console.log("D", data);
        setSongs(songs.push(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    favourites.map((f, i) => {
      fetchSong(f);
      if (i > favourites.length - 3) {
        setIsLoading(false);
        console.log("finale", songs);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  {/* {songs.map((f) => {
                    return <Track songinfo={f} />;
                  })} */}
                </>
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favourite;
