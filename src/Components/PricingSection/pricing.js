import Image from "next/image";
import styles from "./pricing.module.css";
import pricingCardLogo from "../../../public/logo.png";
function Pricing() {
  return (
    <>
      <section className={styles.pricing_section}>
        <h1>Pricing</h1>
        <p>( Additionals )</p>
        <div className={styles.pricing_box_container}>
          <div className={styles.pricing_area}>
            <div className={styles.pricing_cards}>
              <div className={styles.pricing_card_header}>
                <Image
                  className={styles.pricing_card_logo}
                  src={pricingCardLogo}
                ></Image>
                <h2>Basic</h2>
              </div>
              <div className={styles.price_area}>
                <h1>$499</h1>
                <span>/month</span>
              </div>
              <div className={styles.provide_texts}>
                <ul>
                  <li>SEO</li>
                  <li>ChatBot</li>
                  <li>ChatBot</li>
                  <li>24/7 support</li>
                  <li>ChatBot</li>
                  <li>Hosting</li>
                  <li>24/7 support</li>
                  <li>5GB Storage Space</li>
                </ul>
              </div>
              <button className={`btn ${styles.pricing_card_btn}`}>
                Let's Start
              </button>
            </div>
            <div className={styles.pricing_cards}>
              <div className={styles.pricing_card_header}>
                <Image
                  className={styles.pricing_card_logo}
                  src={pricingCardLogo}
                ></Image>
                <h2>Pro</h2>
              </div>
              <div className={styles.price_area}>
                <h1>$799</h1>
                <span>/month</span>
              </div>
              <div className={styles.provide_texts}>
                <ul>
                  <li>SEO</li>
                  <li>ChatBot</li>
                  <li>ChatBot</li>
                  <li>24/7 support</li>
                  <li>ChatBot</li>
                  <li>Hosting</li>
                  <li>24/7 support</li>
                  <li>5GB Storage Space</li>
                </ul>
              </div>
              <button className={`btn ${styles.pricing_card_btn}`}>
                Let's Start
              </button>
            </div>
            <div className={styles.pricing_cards}>
              <div className={styles.pricing_card_header}>
                <Image
                  className={styles.pricing_card_logo}
                  src={pricingCardLogo}
                ></Image>
                <h2>Epic</h2>
              </div>
              <div className={styles.price_area}>
                <h1>$9999</h1>
                <span>/month</span>
              </div>
              <div className={styles.provide_texts}>
                <ul>
                  <li>SEO</li>
                  <li>ChatBot</li>
                  <li>ChatBot</li>
                  <li>24/7 support</li>
                  <li>ChatBot</li>
                  <li>Hosting</li>
                  <li>24/7 support</li>
                  <li>5GB Storage Space</li>
                </ul>
              </div>
              <button className={`btn ${styles.pricing_card_btn}`}>
                Let's Start
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
