import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.loginContainer}>
    <p className={styles.logo}> HOUSEWORKS</p>
    <p className={styles.logIn}> Log in</p>
    <label htmlFor="email">Email</label>
    <input
      id="email"
      className={styles.loginInput}
      type="text"
      placeholder="Enter your email"
    />
    <label htmlFor="password">Password</label>
    <input
      id="password"
      className={styles.loginInput}
      type="password"
      placeholder="Enter your password"
    />
    <button className={styles.loginButton}>Login</button>
  </div>
);

export default Home;
