import React, { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
function Album(props) {
  //track albums
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState();
  const albumsRef = useRef();
  albumsRef.current = albums;

  //unmounting
  useEffect(() => {
    getAllAlbum(props.match.params.id);
  }, [props.match.params.id]);
  const searchById = (d) => {
    d = albumId;
  };

  //fetch albums
  const getAllAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos/?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAlbums(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <center>
            {albums.map((album) => (
              <ul key={album.id}>
                <li>
                  <div className="list-item">
                    <div className="image-container">
                      <center>
                        <img
                          className="img"
                          src={`${album.thumbnailUrl}`}
                          alt=""
                        />
                      </center>
                    </div>
                    <h1>{album.title}</h1>
                    <p>{album.title}</p>
                  </div>
                </li>
              </ul>
            ))}
          </center>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Album;
