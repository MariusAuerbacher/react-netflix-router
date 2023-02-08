import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const MainPage = (props) =>{

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=2beaba4d&s=${props.category}`
      ); 
      let data = await res.json();
      console.log(data);
      setMovies(data.Search)
      setIsLoading(false)
      if (data.Error) {
        console.log(data.Error)
        setError("something went wrong")
      }
    } catch (error) {
      console.log(error)
      setError("something went wrong")

    }
  }

  useEffect(() =>{
    getMovies()
  }, [])



    return (
      <>
        <div className="root">
          <h2>Random Movies</h2>
          {isLoading ? <p>loading</p> : null}
          {error ? <p>{error}</p> : null}
          <div>
            {movies
              ? movies.map((movie) => {
                  return (
                          <img onClick={()=>{
                            navigate(`/movie-details/${movie.imdbID}`)
                          }}
                            key={movie.imdbID}
                            src={movie.Poster}
                            alt={movie.Title}
                          />
                  );
                })
              : null}
          </div>
        </div>
      </>
    );

}
export default MainPage;
