import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction, removeFromFavouriteAction } from "../redux/actions";

function TrackList({ track }) {
  const favourites = useSelector((state) => state.favourite.list);

  const isFav = favourites.includes(track.id);

  const dispatch = useDispatch();

  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex text-light bg-dark justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{track.title}</div>
        </div>
        {isFav ? (
          <Badge
            bg="tertiartiary"
            onClick={() => {
              dispatch(removeFromFavouriteAction(track.id));
            }}
            pill
          >
            <i className="bi bi-heart-fill text-white"></i>
          </Badge>
        ) : (
          <Badge
            bg="tertiartiary"
            onClick={() => {
              dispatch(addToFavouriteAction(track.id));
            }}
            pill
          >
            <i className="bi bi-heart"></i>
          </Badge>
        )}
      </ListGroup.Item>
    </>
  );
}

export default TrackList;
