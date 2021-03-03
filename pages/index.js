// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";
import Image from "next/image";
import styles from "../styles/index.module.scss";
import {useState, useEffect } from "react";


export default function Home () {

  const [isShown, setIsShown] = useState('');

  useEffect(() => {
    setIsShown('Instrumentation');
  }, []);

  return(
    <div>
      <Layout page='ICA - Web Formation'>
        <h1>ICA - Formation à distance en ligne avec formateur</h1>
          <p>ICA WebFormation vous propose des formations à distance modulées en courtes séances de 3 heures en général, très appropriées si vous ne souhaitez pas dédier toute votre journée à la formation. 
          <p className={styles.wrapper}>
            <Image className={styles.img} src="/learning1.jpeg" alt="un ordinateur" width="480px" height="250px"/>
          </p>
          Ces formations modulaires sont aussi prévues pour être dispensées en France comme à l’étranger : nous adaptons notre intervention à votre planning !
          Ces formations peuvent aussi être dispensées par demi-journée ou journée.
          </p>

          <p><strong> La formation est dispensée par le formateur qui est toujours en ligne avec les participants. </strong> 
          C'est une formation distancielle synchrone.
          Également appelée classe virtuelle ou Webclass ou encore Webformation. </p>
          <p> <strong> Les interactions sont permanentes et en direct. </strong> 
          Les apprenants visualisent le formateur à distance et le contenu de la formation soit sur leur micro-ordinateur soit par vidéo-conférence.</p>
          <br/>
          <section><h2 className={styles.subtitle}>Nous proposons trois types de formations :</h2>
            <article>
              <div>
                <p onMouseEnter={() => setIsShown('Instrumentation')}
                      onMouseLeave={() => setIsShown('Instrumentation')}>Instrumentation</p>
                <p onMouseEnter={() => setIsShown('Regulation')}
                      onMouseLeave={() => setIsShown('Regulation')}>Regulation</p>
                <p onMouseEnter={() => setIsShown('ATEX')}
                      onMouseLeave={() => setIsShown('ATEX')}>ATEX</p>
              </div>
                {isShown === "Instrumentation" && (
                  <div>
                    <table className={styles.table}>
                      <tr className={styles.tr}>
                        <th className={styles.th}>Data 1</th>
                        <th className={styles.th}>Data 2</th>
                        </tr>
                        <tr>
                        <td className={styles.td}>Knocky</td>
                        <td className={styles.td}>Florida</td>
                      </tr>
                      <tr className={styles.tr}>
                        <td className={styles.td}>Knocky</td>
                        <td className={styles.td}>Florida</td>
                      </tr>
                    </table>
                  </div>)}
                {isShown === "Regulation" && (
              <div>regulation à true</div>)}
                            {isShown === "ATEX" && (
              <div>ATEX à true</div>)}
            </article>


            </section>
      </Layout>
    </div>
  )
}