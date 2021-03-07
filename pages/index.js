// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";
import Formations from "../components/formations/formations.js";
import Image from "next/image";
import styles from "../styles/index.module.scss";
import {useState } from "react";
import instrumentation from '../data/instrumentation.js';
import atex from '../data/atex.js';
import regulation from '../data/regulation.js';


export default function Home () {
  const [data, setData] = useState(instrumentation);
 const [typeFormation, setTypeFormation] = useState('instrumentation');


  return(
    <div >
      <Layout page='ICA - Web Formation'>
        <div className={styles.description}>
        <h1>ICA - Formation à distance en ligne avec formateur</h1>
          <div className={styles.wrapper}>
            <Image className={styles.img} src="/learning1.jpeg" alt="un ordinateur" width="480px" height="250px"/>
          </div>
          <p>Ces formations peuvent aussi être dispensées par demi-journée ou journée.</p>
          <p>ICA WebFormation vous propose des formations à distance modulées en courtes séances de 3 heures en général, très appropriées si vous ne souhaitez pas dédier toute votre journée à la formation. 
          Ces formations modulaires sont aussi prévues pour être dispensées en France comme à l’étranger : nous adaptons notre intervention à votre planning !
          </p>
          <p><strong> La formation est dispensée par le formateur qui est toujours en ligne avec les participants. </strong> 
          C'est une formation distancielle synchrone.
          Également appelée classe virtuelle ou Webclass ou encore Webformation.  </p>
          <p><strong> Les interactions sont permanentes et en direct. </strong> 
          Les apprenants visualisent le formateur à distance et le contenu de la formation soit sur leur micro-ordinateur soit par vidéo-conférence.</p>
          </div>
          <section  className={styles.sectionFormations}><h2 className={styles.subtitle}>Nous proposons trois types de formations :</h2>
            <article>
              <div className={styles.sectionFormations__table}>
                <div onMouseEnter={() =>{ setData(instrumentation),setTypeFormation('Instrumentation')}}
                      >Instrumentation</div>
                <div onMouseEnter={() => {setData(regulation),setTypeFormation('Regulation')}}
                      >Regulation</div>
                <div onMouseEnter={() => {setData(atex),setTypeFormation('ATEX')}}
                      >ATEX</div>
              </div>
              <Formations data={data} typeFormation={typeFormation}/>
            </article>
            </section>
      </Layout>
    </div>
  )
}

