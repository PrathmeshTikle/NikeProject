import styles from "../components/style.module.css"
export const Navigation = () => {
  return (
    <>
      <div>
      <nav className={styles.contentcontainer}>
        <div className={styles.logo}>
            <img src="images/brand_logo.png" alt="" />
        </div>
            <ul>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <button className={styles.stylebutton}>Login</button>

    </nav>
      </div>
    </>
  );
};
