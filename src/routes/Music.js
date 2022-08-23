import { useParams } from "react-router-dom";

function Movie() {
  const {id} = useParams();

  return (
    <div>Movie: {id}</div>
  );
}

export default Movie;
