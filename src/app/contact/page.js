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
        <div className={styles.contact_page_body_area}>
          <div className={styles.contact_page_body_contianer}>
            <div className={styles.contact_card}>
              <div className={styles.contact_card_sides}>
                <div className={styles.contact_card_side_1}>
                  <input type="text" name="username" placeholder="Name" />
                  <input type="text" name="useremail" placeholder="Email" />
                  <span>Select your package :</span>
                  <div className={styles.package_area}>
                    <div>
                      <input type="radio" name="basic" id="basic" checked />
                      <label htmlFor="basic">Basic</label>
                    </div>
                    <div>
                      <input type="radio" name="basic" id="pro" checked />
                      <label htmlFor="pro">Pro</label>
                    </div>
                    <div>
                      <input type="radio" name="basic" id="epic" checked />
                      <label htmlFor="epic">Epic</label>
                    </div>
                  </div>
                </div>
                <div className={styles.contact_card_side_2}>
                  <textarea
                    name="usermessage"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <button className={`btn ${styles.contact_card_btn}`}>Send</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
