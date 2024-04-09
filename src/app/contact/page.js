import Footer from "@/Components/Footer/footer";
import styles from "./contact.module.css";

function Contact() {
  return (
    <>
      <section className={styles.contact_page}>
        <div className={styles.contact_page_header_area}>
          <div className={styles.contact_page_header_contianer}>
            <h1>Contact Us</h1>
            <p>
              Please fill this quick form and I will get back to you within 1
              business day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
