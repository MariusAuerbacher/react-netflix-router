import "./App.css";
import NetflixNavbar from "./Components/NetflixNavbar";
import Footer from "./Components/Footer";
import MovieGallery from "./Components/MovieGallery";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <NetflixNavbar />
        <Routes>
          <Route
            path="/tv-shows"
            element={
              <>
                <MovieGallery category={"Harry Potter"} />
                <MovieGallery category={"Lord Of The Rings"} />
                <MovieGallery category={"Star Wars"} />
              </>
            }
          />

          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
/* Here is your key: 2beaba4d

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=2beaba4d*/
