import styles from "../components/style.module.css";
export const Hero = () => {
  return (
    <>
      <div className={styles.contentcontainer}>
        <div className="content">
          <h1>your text deserve the best</h1>
          <p>
            A shoe is an item of footwear intended to protect and comfort the
            human foot. Though the human foot can adapt to varied terrains and
            climate conditions, it is vulnerable, and shoes provide protection.
          </p>
          <div className={styles.buttoncontent}>
            <button className={styles.stylebutton}>ShopNow</button>
            <button className={styles.stylegraybutton}>Category</button>
          </div>
          <div>
            <p>Also Available On</p>
            <div className={styles.shop}>
              <img src="images/amazon.png" alt="" />
              <img src="images/flipkart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="shoe-logo">
          <img src="images/hero-image.png" alt="" />
        </div>
      </div>
    </>
  );
};
