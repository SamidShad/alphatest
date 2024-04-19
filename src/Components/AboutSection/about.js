import Image from "next/image";
import styles from "./about.module.css";
import aboutImage from "../../../public/about_image.png";

function About() {
  return (
    <>
      <section
        className={styles.about_section}
      >
        <div className={styles.about_area}>
          <div className={styles.about_container}>
            <Image
              className={styles.about_image}
              draggable={false}
              src={aboutImage}
            ></Image>
            <div className={styles.about_text_container}>
              <h1>About us</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque eius animi quas iure consequatur? Ad cum earum,
                pariatur omnis
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloremque eius animi quas iure consequatur? Ad cum earum,
                pariatur omnis
              </p>
              <button className={`btn ${styles.about_section_btn}`}>
                Start a project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
