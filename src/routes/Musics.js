import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

function Movies() {
  const [musics, setMusics] = useState(null);
  const client = useApolloClient();
  // https://new.chunithm-net.com/chuni-mobile/html/mobile/img/
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMusics {
              title
              image
            }
          }
        `,
      })
      .then((response) => setMusics(response.data.allMusics));
  }, [client]);

  return (
    <div>
      List of Musics
      {musics && musics.map((music, index) => (
        <li key={`${music.title}${index}`}>
          <p>{music.title}</p>
          <p>{music.artist}</p>
          <div>
            <img
              src={`https://new.chunithm-net.com/chuni-mobile/html/mobile/img/${music.image}`}
              alt={music.title}
            />
          </div>
        </li>
      ))}
    </div>
  );
}

export default Movies;
