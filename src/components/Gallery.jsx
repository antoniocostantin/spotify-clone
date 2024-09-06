import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SongCard from "./SongCard";

function Gallery({ artist, playlist }) {
  const URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs(artist);
  }, []);

  const fetchSongs = async (query) => {
    try {
      const response = await fetch(URL + query);
      if (response.ok) {
        const data = await response.json();
        setSongs(data.data);
        console.log(data.data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="mt-4 text-light">{playlist}</h2>
      <Row
        xs={{ cols: 1 }}
        sm={{ cols: 2 }}
        lg={{ cols: 4 }}
        className="imgLinks py-3"
      >
        {songs && (
          <>
            {songs.map((s, i) => {
              if (i < 4) return <SongCard songDetails={s} key={i} />;
            })}
          </>
        )}
      </Row>
    </>
  );
}

export default Gallery;
