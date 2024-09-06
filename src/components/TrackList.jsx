import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFavouriteAction } from "../redux/actions";

function TrackList ({track}){

    const dispatch = useDispatch()

    return(<>
    <ListGroup.Item
                as="li" 
                className="d-flex text-light bg-dark justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{track.title}</div>
                  
                </div>
                <Badge bg="tertiartiary" onClick={()=>{dispatch(addToFavouriteAction(track.id))}} pill>
                <i className="bi bi-heart"></i>
                </Badge>
              </ListGroup.Item>
    </>)
}

export default TrackList