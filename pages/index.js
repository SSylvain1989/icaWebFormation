// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import {useState } from "react";
import { FaTv, FaLeanpub, FaRegClock, FaLaptop } from "react-icons/fa";
import { BiUserCheck } from "react-icons/bi";
import { CgScreen } from "react-icons/cg";
import {IoIosLaptop }  from "react-icons/io"
import Image from "next/image";
import instrumentation from '../data/instrumentation.js';
import atex from '../data/atex.js';
import regulation from '../data/regulation.js';
import { Link as ScrollLink } from 'react-scroll';
import Link from'next/link';

import Formations from "../components/formations/formations.js";
import Layout from "../components/Layout/Layout.js";
import styles from "../styles/index.module.scss";



export default function Home () {
  const [data, setData] = useState(instrumentation);
  const [typeFormation, setTypeFormation] = useState('INSTRUMENTATION');


  return(
    <div >
      <Layout page='ICA - Web Formation'>
        <div className={styles.description}>
          <div className={styles.description__header} data-aos="fade-up">
            


              <div className={styles.description__icon}>
                <ScrollLink
                to="advantages"            
                spy
                smooth
                offset={0}
                duration={900}
              > 
              <ul>
              <li><span><IoIosLaptop/></span>
              <h3>Formations en ligne</h3>
                <p>Votre visioformation où que vous soyez. <strong>Tarif dégressif</strong>  dès la 2ème personne pour la même formation</p>
              </li>
              </ul>
              </ScrollLink>
              </div>
              
              <div>
              <ScrollLink
                to="advantages"            
                spy
                smooth
                offset={0}
                duration={900}
                > 
                <ul>
              <li><FaRegClock id={styles.clockIcon}/>
              <h3 id={styles.clocktitle}>On s'adapte à votre emploi du temps</h3>
                <p>Un formateur est à disposition <strong>selon votre fuseau horaire</strong>. </p>
                <p>Des modules de 1h30 à 3 heures.</p>
              </li>
              </ul>           
              </ScrollLink>
              </div>

              <div>
              <Link href="/quisommesnous">
                <a>
                <ul>
              <li><BiUserCheck id={styles.formateurIcon}/>
              <h3>Un formateur agréé</h3>
              <p>Un formateur avec 38 ans d'expérience, reconnu, agréé.</p>
              <p>Un agrément de <strong>formateur d'adultes</strong> de la DFPC.</p>
              </li>
              </ul>
              </a>
              </Link>
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
            <h3 className={styles.subtitle}>Domaines de formation :</h3>
            <article className={styles.sectionFormations__article}>
              <div className={styles.sectionFormations__table}>
                <button onClick={() =>{ setData(instrumentation),setTypeFormation('INSTRUMENTATION')}}
                      className={data === instrumentation ? styles.active : ''}>Instrumentation</button>
                <button onClick={() => {setData(regulation),setTypeFormation('REGULATION')}}
                      className={data === regulation ? styles.active : ''}>CONTRÔLE-COMMANDE / RÉGULATION</button>
                <button onClick={() => {setData(atex),setTypeFormation('ATEX')}}
                      className={data === atex ? styles.active : ''} >ATEX</button>
              </div>
              <Formations data={data} typeFormation={typeFormation}/>
            </article>
              <h3 id="advantages" className={styles.advantages}>Quels sont les avantages de nos formations à distance ? </h3>
              
              <ul>
                  <li>Des formations avec un expert reconnu	</li>
                  <li>Des formations adaptées à votre rythme :	</li>
              <ul>
                <ol>
                  <li>Des horaires adaptés voir modifiables</li>
                  <li>Peu de temps pris pour la formation dans la journée, en général 3 h.</li>
                  <li>Les réponses aux questions sont immédiates et interactives</li>
                  </ol>
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

