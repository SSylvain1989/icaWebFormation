// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout/Layout.js";
import styles from "../styles/quisommesnous.module.scss";


export default function whoWeAre () {
     return(
<Layout page='ICA - Qui sommes nous'>

     <article className={styles.whoWeAre}>

          <section className={styles.whoWeAre__sectionTwo}>
                         <p > <strong>Intervenant et formateur dans l'industrie</strong> depuis bien plus de 30 ans, je dispense aujourd'hui des formations à distance et sur site.</p>
                         <p>
                         Cette expérience de 38 ans dans les domaines de l'Instrumentation, la Régulation et les ATmosphères EXplosives (ATEX) est mise à profit dans mes formations.
                         </p>
          <div className={styles.wrapper}>
            <Image className={styles.img} src="/images/quisommesnous4.webp" alt="formateur" width="400px" height="300px" load="lazy"/>
          </div>
                         <p >
                         <h3>Ma valeur ajoutée :</h3> </p>
                         <ul> 
                              <li>Un savoir-faire en formation de plusieurs années</li>
                         <li>Une adaptation de la formation à votre environnement industriel</li>
                         <li>La compréhension des apprenants car moi-même intervenant en industrie</li>
                         <li>Un agrément de formateur d'adultes de la DFPC</li>
                         </ul>
                         <p >
                         Et enfin une passion : la formation parce que former c'est transmettre, c'est partager !
                         </p>
                         <div className={styles.div}>
          <div className={styles.wrapperLeft}>
            <Image className={styles.img} src="/images/quisommesnous2.webp" alt="un ordinateur" width="400px" height="250px" load="lazy"/>
          </div>
                         <h3>Pourquoi des formations modulaires à distances ?</h3>
                         <ul>
                         <li>Parce qu’aujourd’hui le temps est compté et nous souhaitons pouvoir le gérer !</li>
                         <li>Parce que c’est apprécié des participants !</li>
                         <li>Parce que les entreprises à l’étranger apprécient de pouvoir former leur personnel à <strong>des heures adaptées à leur environnement</strong>  !</li>
                    </ul>
                    </div>
          </section>

          <section className={styles.whoWeAre__sectionTwo}>
                    <h3 >Quels sont les avantages de nos formations à distance ?</h3>
                    <ul>
                         <li>Des formations avec un expert reconnu</li>
                         <li>Des formations adaptées à <strong>votre rythme</strong> :
                              <ol>
                                   <li>Des horaires adaptés voir modifiables</li>
                                   <li>Peu de temps pris pour la formation dans la journée, en général 3 h.</li>
                                   <li>Les réponses aux questions sont immédiates et interactives</li>
                              </ol>
                         <li>Un formateur "présent" qui répond à toutes les questions</li>
                         <li>Des participants qui échangent entre eux</li>
                         <li>Des exercices issus de cas concrets pour une bonne adaptabilité des formations</li>
                         <li>De nombreuses photos d'instruments installés sur site et utilisés en formation</li>
                         <li>Pas de déplacement pour les apprenants (et donc moins de pollution !)</li>
                         <li>Pas de coûts induits (hôtel, restauration, etc.)</li>
                         <li>Possibilité de personnaliser la formation avec votre matériel.</li>
                         </li>
                    </ul>
          </section>

          <div className={styles.whoWeAre__footer}>
          <Link href="/references">
               <button>Nos références</button>
          </Link>
          <Link href="/inscription">
               <button>S'inscrire</button>
          </Link>
          <Link href="/">
               <button>Nos formations</button>
          </Link>

          </div>
     </article>
          
</Layout>

     )
}