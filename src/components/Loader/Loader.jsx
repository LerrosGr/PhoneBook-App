import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <ThreeDots
        visible={true}
        height="30"
        width="80"
        color="orange"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
