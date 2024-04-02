import Image from "next/image";
import styles from "./cta.module.css";
import objectPNG from "../../../public/object.png";

function CTA() {
  return (
    <>
      <section className={styles.cta_section}>
        <div className={styles.cta_area}>
          <div className={styles.cta_section_container}>
            <div className={styles.section_text_container}>
              <h1>fixed your problem</h1>
              <div>
                <p>Available for new projects</p>
                <div className={styles.available_circle}></div>
              </div>
              <button className={`btn ${styles.cta_section_btn}`}>
                Contact
              </button>
            </div>
            <Image src={objectPNG} className={styles.section_object}></Image>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;
