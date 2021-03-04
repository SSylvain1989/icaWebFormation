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
          Ces formations modulaires sont aussi prévues pour être dispensées en France comme à l’étranger : nous adaptons notre intervention à votre planning !
          <p className={styles.wrapper}>
            <Image className={styles.img} src="/learning1.jpeg" alt="un ordinateur" width="480px" height="250px"/>
          </p>
          Ces formations peuvent aussi être dispensées par demi-journée ou journée.
          </p>
          <p><strong> La formation est dispensée par le formateur qui est toujours en ligne avec les participants. </strong> 
          C'est une formation distancielle synchrone.
          Également appelée classe virtuelle ou Webclass ou encore Webformation.  </p>
          <p><strong> Les interactions sont permanentes et en direct. </strong> 
          Les apprenants visualisent le formateur à distance et le contenu de la formation soit sur leur micro-ordinateur soit par vidéo-conférence.</p>
          <section  className={styles.sectionMain}><h2 className={styles.subtitle}>Nous proposons trois types de formations :</h2>
            <article>
              <div className={styles.sectionMain__wrapper}>
                <div onMouseEnter={() => setIsShown('Instrumentation')}
                      onMouseLeave={() => setIsShown('Instrumentation')}>Instrumentation</div>
                <div onMouseEnter={() => setIsShown('Regulation')}
                      onMouseLeave={() => setIsShown('Regulation')}>Regulation</div>
                <div onMouseEnter={() => setIsShown('ATEX')}
                      onMouseLeave={() => setIsShown('ATEX')}>ATEX</div>
              </div>
                {isShown === "Instrumentation" && (
                  <div>
                    <table className={styles.table}>
                      <tr className={styles.tr}>
                            <th className={styles.th}>Bureau d'étude</th>
                            <th className={styles.th}>Maintenance</th>
                            <th className={styles.th}>Exploitation</th>
                            <th className={styles.th}>Instrumentation</th>
                            <th className={styles.th}>Temps de formation</th>
                            <th className={styles.th}>Répartition en modules</th>
                        </tr>
                        <tr>
                            <td className={styles.td}>blablblalbalbal</td>
                            <td className={styles.td}>2*2</td>
                            <td className={styles.td}>I3*3</td>
                            <td className={styles.td}>Instrumentation en 1 jour</td>
                            <td className={styles.td}>1 jour ! (7h30)</td>
                            <td className={styles.td}>7 x 3h + 1 x 1h30</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>blablabla</td>
                            <td className={styles.td}>Florida</td>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Bases de l’instrumentation</td>
                            <td className={styles.td}>3 jours (22h30)</td>
                            <td className={styles.td}>7 x 3h + 1 x 1h30</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>4</td>
                            <td className={styles.td}>Les mesures de débit</td>
                            <td className={styles.td}>Les mesures de débit</td>
                            <td className={styles.td}>2 jours (15h)</td>
                            <td className={styles.td}>5 x 3h</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Florida</td>
                            <td className={styles.td}></td>
                            <td className={styles.td}>Les mesures de températures</td>
                            <td className={styles.td}>2 jours (15h)</td>
                            <td className={styles.td}>5 x 3h</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Florida</td>
                            <td className={styles.td}>Les mesures de débit</td>
                            <td className={styles.td}>Initiation à la métrologie</td>
                            <td className={styles.td}>2 jours (15h)</td>
                            <td className={styles.td}>5 x 3h</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Florida</td>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Optimisation des mesures</td>
                            <td className={styles.td}>5 jours (37h30)</td>
                            <td className={styles.td}>12 x 3h + 1 x 1h30</td>
                      </tr>
                      <tr className={styles.tr}>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Florida</td>
                            <td className={styles.td}>Knocky</td>
                            <td className={styles.td}>Mécanique des fluides (dont les pertes de charge)</td>
                            <td className={styles.td}>2 jours (15h) ERREUR?</td>
                            <td className={styles.td}>5 x 3h</td>
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