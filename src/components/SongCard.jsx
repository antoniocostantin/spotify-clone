import { Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function SongCard ({songDetails}) {
    const navigate = useNavigate()

    return (
        <Col className="text-center songImg clickable" onClick={()=>{navigate(`/${songDetails.album.id}`)}}>
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