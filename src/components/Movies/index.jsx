import { fetchMovies } from "@redux/movies/slice";
import { STATUSES } from "@utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Movies = ({ id }) => {
  const dispatch = useDispatch();
  const { moviesList, moviesFetchStatus } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies(id));
  }, [dispatch, id]);

  return (
    <>
      {moviesFetchStatus === STATUSES.LOADING ? (
        <div>loading</div>
      ) : (
        <div style={{ position: "relative", zIndex: 2 }}>
          {moviesList.map((movies) => (
            <video
              key={movies.id}
              controls
              width={250}
              height={200}
              poster={movies.preview}
              src={movies.data[480]}
            ></video>
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
