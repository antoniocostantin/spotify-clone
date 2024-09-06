/* eslint-disable jsx-a11y/anchor-is-valid */
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function MusicPlayer() {

  const player = useSelector((s) => s.player.info);
  const audio = new Audio(player.mp3)
  audio.play()

  useEffect(() => {
    console.log("aihisah", player);
  }, []);

  console.log("aihisah", player);
  return (
    <>
      {" "}
      <Container fluid className="fixed-bottom bg-container boh">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100 align-items-center">
              <Col xs={3} md={4}>
                {player && (
                  <img src={player.cover} alt="album cover" className="cover" />
                )}
              </Col>
              <Col xs={6} md={4} className="playerControls">
                <div className="d-flex text-white-50">
                  <img src={shuffle} alt="shuffle" className="playerControl" />
                  <img src={prev} alt="prev" className="playerControl" />{" "}
                  <img src={play} alt="play" className="playerControl" onClick={()=>{audio.pause()}} />
                  <img src={next} alt="next" className="playerControl" />{" "}
                  <img src={repeat} alt="repeat" className="playerControl" />
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </Col>
              <Col xs={3} md={4}>
                {player && (
                  <p className="text-white-50 text-end">
                    Track: "{player.title}"<br />
                    Artist: {player.artist}
                    <br />
                    Album: {player.album}
                  </p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MusicPlayer;
