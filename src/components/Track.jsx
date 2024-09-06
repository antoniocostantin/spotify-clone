import { ListGroup } from "react-bootstrap";

function Track ({songinfo}){
    return(<>
     <ListGroup.Item
        as="li"
        className="d-flex text-light bg-dark justify-content-between align-items-start"
      >
     <img src={songinfo.album.cover} alt="boh" className="h-50" /> 
        <div className="ms-2 me-auto">
          <div className="fw-bold">{songinfo.title}</div>
        </div>
    </ListGroup.Item>
    </>)
}

export default Track