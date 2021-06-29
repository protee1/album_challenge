import React, { useEffect, useRef, useState } from "react";
import Header from "./header";

function Albums(props) {
  //track albums
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState();
  const albumsRef = useRef();
  albumsRef.current = albums;

  //unmounting
  useEffect(() => {
    getAllAlbum();
  }, []);
  //fetch albums
  const getAllAlbum = () => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setAlbums(data);
      });
  };
  const searchById = () => {
    props.history.push("/album/" + albumId);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <aside>
          <form>
            <label htmlFor="id"> FILTER BY ID: </label>

            <input
              type="number"
              id="id"
              name="id"
              value={albumId}
              placeholder="e.g. 1"
              onChange={(e) => setAlbumId(e.target.value)}
            />
            <center>
              {" "}
              <button type="button" onClick={searchById}>
                Get Album Photos By Id
              </button>
            </center>
          </form>
        </aside>
        <article>
          <center>
            {albums.map((post) => {
              return (
                <ul key={post.id}>
                  <li>
                    <div className="list-item">
                      <h1>{post.title}</h1>
                      <div className="image-container">
                        <center>
                          <img
                            className="img"
                            src={`${post.thumbnailUrl}`}
                            alt=""
                          />
                        </center>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
          </center>
        </article>
      </main>
      <footer>
        {" "}
        <p>Made by @Protee </p>
      </footer>
    </>
  );
}

export default Albums;
