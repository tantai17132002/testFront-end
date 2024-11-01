import styles from '../../styles/Login.module.scss';

export default function Login() {
  return (
    <div className={styles.form}>
      <div className="control">
        <h1>Sign In</h1>
      </div>
      <div className="control block-cube block-input">
        <input type="text" name="username" placeholder="Username" />
      </div>
      <div className="control block-cube block-input">
        <input type="password" name="password" placeholder="Password" />
      </div>
      <button type="button" className="btn block-cube block-cube-hover">
        Log In
      </button>
      <div className="credits">
        <a href="https://codepen.io/marko-zub/" target="_blank">My other codepens</a>
      </div>
    </div>
  );
}
