// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import {useState } from "react";
import { FaTv, FaLeanpub, FaRegClock, FaLaptop } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import {IoIosLaptop }  from "react-icons/io"
import Layout from "../components/Layout/Layout.js";
import Formations from "../components/formations/formations.js";
import Image from "next/image";
import styles from "../styles/index.module.scss";
import instrumentation from '../data/instrumentation.js';
import atex from '../data/atex.js';
import regulation from '../data/regulation.js';



export default function Home () {
  const [data, setData] = useState(instrumentation);
  const [typeFormation, setTypeFormation] = useState('INSTRUMENTATION');


  return(
    <div >
      <Layout page='ICA - Web Formation'>
        <div className={styles.description}>
          <div className={styles.description__header}>
            <div>
              <li><span><IoIosLaptop/></span>
              <h4>Formations en ligne</h4>
                <p>Formez-vous sur votre lieu de travail ou en télétravail</p>
              </li>
              <li><FaRegClock id={styles.clockIcon}/>
              <h4>On s'adapte à votre emploi du temps</h4>
                <p>Un formateur est à disposition selon votre fuseau horaire </p>
              </li>
              <li><BiUserCheck id={styles.formateurIcon}/>
              <h4>Un formateur certifié</h4>
              <p>Un formateur reconnu , expérimenté et certifié </p>
              </li>
            </div>
          </div>
          <p className={styles.wrapper}>
            <Image className={styles.img} src="/images/learning1.jpeg" alt="un ordinateur" width="480px" height="250px"/>
          </p>
          <h2>Formations dédiées à l'instrumentation, au contrôle-commande et aux directives ATEX</h2>
          <p>Ces formations peuvent aussi être dispensées par demi-journée ou journée.</p>
          <p>ICA WebFormation vous propose des formations à distance modulées en courtes séances de 3 heures en général, très appropriées si vous ne souhaitez pas dédier toute votre journée à la formation. 
          </p>
          <p> Ces formations modulaires sont dispensées en France et à l’étranger : <strong>nous adaptons notre intervention à votre planning </strong> !
          </p>
          <p><strong> La formation est dispensée par le formateur qui est toujours en ligne avec les participants. </strong> 
          C'est une formation distancielle synchrone.
          Également appelée classe virtuelle ou Webclass ou encore Webformation.  </p>
          <p><strong> Les interactions sont permanentes et en direct. </strong> 
          Les apprenants visualisent le formateur à distance et le contenu de la formation soit sur leur micro-ordinateur soit par vidéo-conférence.</p>
          </div>
          <section  className={styles.sectionFormations}>
            <h2 className={styles.subtitle}>Domaines de formations :</h2>
            <article className={styles.sectionFormations__article}>
              <div className={styles.sectionFormations__table}>
                <button onClick={() =>{ setData(instrumentation),setTypeFormation('INSTRUMENTATION')}}
                      >Instrumentation</button>
                <button onClick={() => {setData(regulation),setTypeFormation('REGULATION')}}
                      >Regulation</button>
                <button onClick={() => {setData(atex),setTypeFormation('ATEX')}}
                      >ATEX</button>
              </div>
              <Formations data={data} typeFormation={typeFormation}/>
            </article>
              <h3 >Quels sont les avantages de nos formations à distance ? </h3>
              <ul>
                  <li>Des formations avec un expert reconnu	</li>
                  <li>Des formations adaptées à votre rythme :	</li>
              <ul>
                  <li>Des horaires adaptés voir modifiables</li>
                  <li>Peu de temps pris pour la formation dans la journée, en général 3 h.</li>
                  <li>Les réponses aux questions sont immédiates et interactives</li>
              </ul>
                  <li>Un formateur "présent" qui répond à toutes les questions</li>
                  <li>Des participants qui échangent entre eux	</li>
                  <li>Des exercices issus de cas concrets pour une bonne adaptabilité des formations</li>
                  <li>De nombreuses photos d'instruments installés sur site et utilisés en formation</li>
                  <li>Pas de déplacement pour les apprenants (et donc moins de pollution !)</li>
                  <li>Pas de coûts induits (hôtel, restauration, etc.)</li>
                  <li>Possibilité de personnaliser la formation avec votre matériel.</li>
              </ul>
            </section>
      </Layout>
    </div>
  )
}

