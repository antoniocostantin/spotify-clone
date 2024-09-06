import { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Track from "./Track";
let songss = [];
const Favourite = () => {
  const favourites = useSelector((s) => s.favourite.list);
  const dispatch = useDispatch();

  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://striveschool-api.herokuapp.com/api/deezer/track/";

  const fetchSong = async (query, i) => {
    try {
      const response = await fetch(URL + query);
      if (response.ok) {
        const data = await response.json();
        console.log("DA", data);
        setSongs(songs.push(data));
        if (i > favourites.length - 2) {
          setIsLoading(false);
          songss = Array.from(songs)
          console.log("finale", songs);
        }
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSongs([])
    favourites.map((f, i) => {
      fetchSong(f, i);
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="my-5 lastGallery">
          <Col>
            <ListGroup className="mb-5">
              {isLoading ? (
                <Spinner />
              ) : (
                <>
                  {songss.map((s) => {
                    return (
                      <>
                        <Track songinfo={s} key={s.id} />
                      </>
                    );
                  })}
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
