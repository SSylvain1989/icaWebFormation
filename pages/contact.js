// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout";
import styles from "../styles/contact.module.scss";

export default function Contact () {
     return(
          <div>
          <Layout page='ICA - Contact'>
          <h2 className={styles.titleContact}>Contact</h2>
          <div className="madiv">jesuis une div</div>
          </Layout>
          </div>
     )
}