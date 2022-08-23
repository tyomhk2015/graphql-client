import { useParams } from "react-router-dom";

function Music() {
  const {id} = useParams();

  return (
    <div>Movie: {id}</div>
  );
}

export default Music;
