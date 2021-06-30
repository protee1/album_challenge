import React, { useState } from "react";
import Header from "./header";

function Home(props) {
  const initialState = {
    id: "",
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlbumId({
      ...albumId,
      [name]: value,
    });
  };
  const [albumId, setAlbumId] = useState(initialState);
  const searchById = (e) => {
    e.preventDefault();
    props.history.push("/album/" + albumId.id);
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <center>
            <form>
              <label htmlFor="id"> FILTER BY ID: </label>

              <input
                type="number"
                id="id"
                name="id"
                value={albumId.id}
                placeholder="e.g. 1"
                onChange={handleInputChange}
              />
              <center>
                {" "}
                <button type="button" onClick={searchById}>
                  Get Album Photos By Id
                </button>
              </center>
            </form>
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

export default Home;
