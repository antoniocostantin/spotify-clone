import { Col } from "react-bootstrap"

function SongCard ({songDetails}) {
    return (
        <Col className="text-center">
          <img className="img-fluid" src={
            songDetails.album.cover_medium
          } alt="track" />
        <p>
            Track: {songDetails.title}<br/>
            Artist: {songDetails.artist.name}
        </p>
      </Col>
    )
} 

export default SongCard