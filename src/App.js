import { useState } from "react";
import axios from "axios";

import TitleSection from "./components/title_section";
import SearchBar from "./components/search_bar";
import "./style/App.scss";

const UNSPLASH_ID = process.env.REACT_APP_UNSPLASH_ID;

const App = () => {
  const [queryPics, setQueryPics] = useState("");
  const [error, setError] = useState("");

  return (
    <>
      <main className="App">
        <section>
          <TitleSection />
        </section>
        <section>
          <SearchBar
            onChange={(value) =>
              axios
                .get(
                  `https://api.unsplash.com/search/photos?query=${value}&client_id=${UNSPLASH_ID}&count=15`
                )
                .then((response) =>
                  setQueryPics(
                    response.data.results.map((i) => {
                      return (
                        <div className="column">
                          <div className="img_container" key={i.id}>
                            <a
                              href={i.urls.full}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={i.urls.regular}
                                alt={i.alt_description}
                                style={{ height: "345px" }}
                              />
                            </a>
                            <div className="author">
                              <span id="credit">
                                <p>taken by: </p>
                              </span>
                              {i.user.name}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )
                )
                .catch((err) => setError(err.response.status))
            }
          />
        </section>
        {error === "403" ? (
          <p>Limit reached. Please try again later.</p>
        ) : (
          <div className="query_results">{queryPics}</div>
        )}
      </main>
    </>
  );
};

export default App;
