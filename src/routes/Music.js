import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MUSIC = gql`
  query music($musicId: ID!) {
    music(id: $musicId) {
      id
      artist
      title
      image
      # Local only field
      isLiked @client
    }
  }
`;

function Music() {
  const { id } = useParams();

  const { data,  client: {cache} } = useQuery(GET_MUSIC, {
    // Give useQuery some arguments
    variables: {
      musicId: id,
    },
  });

  const toggleLike = () => {
    // Fragment: A piece of types from queried data.
    // cache: Apollo cache is stored in browser memory.
    cache.writeFragment({
      id: `Music:${id}`,
      fragment: gql`
        fragment MusicFragment on Music {
          isLiked
        }
      `,
      data: {
        __typename: "Music",
        isLiked: !data.music.isLiked,
      },
    });

    console.log(data.music);
  };

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
          {/* In order to update UI with fragment, the property which is required for 'writeFragment' must be included in the remote field */}
          {/* For this case, 'id' is required in 'writeFragment' section, and to update UI according to the cache, the 'id' property must be included in the remote field.  */}
          <button onClick={toggleLike}>💛 {data.music.isLiked ? 'LIKED' : 'NOT LIKED'} </button>
        </>
      )}
    </>
  );
}

export default Music;
