import PacmanLoader from 'react-spinners/ScaleLoader';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.Loader}>
      <PacmanLoader color="#36d7b7" size={35} data-testid="loader" />
    </div>
  );
};
