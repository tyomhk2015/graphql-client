import style from './Musics.module.scss';
import { gql, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

const ALL_MUSICS = gql`
  # Remote field
  query getAllMusics {
    allMusics {
      id
      title
      artist
    }
  }
`;

function Musics() {
  // https://new.chunithm-net.com/chuni-mobile/html/mobile/img/
  const { data } = useQuery(ALL_MUSICS);

  return (
    <div>
      List of Musics
      {data && data.allMusics.map((music, index) => (
        <li className={style['music-list']} key={`${music.id}`}>
          <Link to={`/music/${music.id}`}>
            <p>{music.title}</p>
            <p>{music.artist}</p>
          </Link>
        </li>
      ))}
    </div>
  );
}

export default Musics;
