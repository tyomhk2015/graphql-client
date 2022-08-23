import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./routes/Music";
import Musics from "./routes/Musics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Musics />}/>
        <Route path="/music/:id" element={<Music />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
