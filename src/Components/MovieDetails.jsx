import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(null);
  const params = useParams();
  console.log(params.movieId);

  const getMovie = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=2beaba4d&i=${params.movieId}`
    );
    let data = await response.json();
    setMovie(data);
  };

  const getComments = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        headers: {
          Authorization:  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzUzNDE2MjYsImV4cCI6MTY3NjU1MTIyNn0.bPwPGuwUuH1beV7mOeR0Y1s_UlFQnOtBnktkiW1JB5I",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    setComments(data);
  };

  useEffect(() => {
    getMovie();
    getComments();
  }, []);

  if (!movie) {
    return <></>;
  }
  
 
  return (
    <>
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
      <h3>{movie.imdbID}</h3>

    </>
  );
};

export default MovieDetails;
