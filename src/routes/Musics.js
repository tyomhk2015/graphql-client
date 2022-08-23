import style from './Musics.module.scss';
import { gql, useQuery } from "@apollo/client";

const ALL_MUSICS = gql`
  query getAllMusics {
    allMusics {
      id
      title
      reading
      image
    }
  }
`;

function Musics() {
  // https://new.chunithm-net.com/chuni-mobile/html/mobile/img/
  const { data } = useQuery(ALL_MUSICS);

  console.log(data);

  return (
    <div>
      List of Musics
      {data && data.allMusics.map((music, index) => (
        <li className={style['music-list']} key={`${music.title}${index}`}>
          <p>{music.title}</p>
          <p>{music.reading}</p>
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

export default Musics;
