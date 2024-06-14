import css from './Error.module.css';

export default function Error() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Oops, try reloading the page!</p>
    </div>
  );
}
