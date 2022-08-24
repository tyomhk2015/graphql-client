import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MUSIC = gql`
  query music($musicId: ID!) {
    music(id: $musicId) {
      artist
      title
      image
    }
  }
`;

function Music() {
  const { id } = useParams();

  const { data } = useQuery(GET_MUSIC, {
    // Give useQuery some arguments
    variables: {
      musicId: id,
    },
  });

  return (
    <>
      <div>Movie: {id}</div>
      {data && (
        <>
          <p>{data.music.title}</p>
          <p>{data.music.artist}</p>
          <div>
            <img
              src={`https://new.chunithm-net.com/chuni-mobile/html/mobile/img/${data.music.image}`}
              alt={data.music.title}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Music;
