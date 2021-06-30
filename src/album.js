import React, { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
function Album(props) {
  //track albums
  const [albums, setAlbums] = useState([]);
  const albumsRef = useRef();
  albumsRef.current = albums;

  //unmounting
  useEffect(() => {
    getAllAlbum(props.match.params.id);
  }, [props.match.params.id]);

  //fetch albums
  const getAllAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
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
                <center>
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
                    </div>
                  </li>
                </center>
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
