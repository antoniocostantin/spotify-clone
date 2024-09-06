import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import play from "../assets/playerbuttons/play.png";

import {
  addToFavouriteAction,
  getPlayerAction,
  removeFromFavouriteAction,
} from "../redux/actions";

function TrackList({ track }) {
  const favourites = useSelector((state) => state.favourite.list);

  const isFav = favourites.includes(track);

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
        <div>
          <Badge
            bg="tertiartiary me-2 play"
            onClick={() => {
              dispatch(
                getPlayerAction({
                  title: track.title,
                  artist: track.artist.name,
                  album: track.album.title,
                  cover: track.album.cover,
                  mp3: track.preview,
                })
              );
            }}
            pill
          >
            <img src={play} alt="play" className="play" />
          </Badge>
          {isFav ? (
            <Badge
              bg="tertiartiary"
              onClick={() => {
                dispatch(removeFromFavouriteAction(track));
              }}
              pill
            >
              <i className="bi bi-heart-fill text-white"></i>
            </Badge>
          ) : (
            <Badge
              bg="tertiartiary"
              onClick={() => {
                dispatch(addToFavouriteAction(track));
              }}
              pill
            >
              <i className="bi bi-heart"></i>
            </Badge>
          )}
        </div>
      </ListGroup.Item>
    </>
  );
}

export default TrackList;
