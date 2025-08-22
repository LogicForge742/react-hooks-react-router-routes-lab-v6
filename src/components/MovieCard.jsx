import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}> View Info</Link>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
