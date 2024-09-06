import { Badge, ListGroup } from "react-bootstrap";
import { addToFavouriteAction, getPlayerAction, removeFromFavouriteAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import play from "../assets/playerbuttons/play.png";

function Track({ songinfo }) {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourite.list);
  const navigate = useNavigate();
  const isFav = favourites.includes(songinfo);

  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex text-light bg-dark justify-content-between align-items-start"
      >
        <img src={songinfo.album.cover} alt="boh" className="favimg" />
        <div className="ms-2 me-auto">
          <div
            className="fw-bold"
            onClick={() => {
              navigate(`/${songinfo.album.id}`);
            }}
          >
            {songinfo.title} <br />{" "}
            <small className="fw-normal text-white-50">
              {songinfo.artist.name}
              -- {songinfo.album.title}{" "}
            </small>
          </div>
        </div>
        <div className="mt-2">
          <Badge
            bg="tertiartiary"
            onClick={() => {
              dispatch(
                getPlayerAction({
                  title: songinfo.title,
                  artist: songinfo.artist.name,
                  album: songinfo.album.title,
                  cover: songinfo.album.cover,
                  mp3: songinfo.preview,
                })
              );
              console.log({
                title: songinfo.title,
                artist: songinfo.artist.name,
                album: songinfo.album.title,
                cover: songinfo.album.cover,
              });
            }}
            pill
          >
            <img src={play} alt="play" className="play" />
          </Badge>
          {!isFav ? (
            <Badge
              bg="tertiartiary"
              onClick={() => {
                dispatch(addToFavouriteAction(songinfo));
              }}
              pill
            >
              <i className="bi bi-heart"></i>
            </Badge>
          ) : (
            <Badge
              bg="tertiartiary"
              onClick={() => {
                dispatch(removeFromFavouriteAction(songinfo));
              }}
              pill
            >
              <i className="bi bi-heart-fill text-white"></i>
            </Badge>
          )}
        </div>
      </ListGroup.Item>
    </>
  );
}

export default Track;
