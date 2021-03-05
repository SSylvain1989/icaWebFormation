// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.
import Image from "next/image";
import Layout from "../components/Layout/Layout.js";
import styles from "../styles/quisommesnous.module.scss";


export default function whoWeAre () {
     return(
     <div>
          <Layout page='ICA - Qui sommes nous'>
               {/* div container */}
               <h2>ICA - Qui sommes nous</h2>
               <article className={styles.whoWeAre}>


<div className={styles.whoWeAre__containerOne}>
{/* div text 1 */}
<section className={styles.whoWeAre__sectionTwo}>
               <p >Intervenant et formateur dans l'industrie depuis bien longtemps (plus de 30 ans !) je dispense aujourd'hui des formations à distance et sur site.</p>
               <p>
               Cette expérience de 38 ans dans les domaines de l'Instrumentation, la Régulation et les ATmosphères EXplosives (ATEX) est mise à profit dans mes formations.
               </p>
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
               <h3>Pourquoi des formations modulaires à distances ?</h3>
               <ul>
               <li>Parce qu’aujourd’hui le temps est compté et nous souhaitons pouvoir le gérer !</li>
               <li>Parce que c’est apprécié des participants !</li>
               <li>Parce que les entreprises à l’étranger apprécient de pouvoir former leur personnel à des heures adaptées à leur environnement !</li>
               </ul>
               </section>
</div>
               {/* div image 1 */}
               <div className={styles.whoWeAre__pictureOne}>
            <Image className={styles.img} src="/quisommesnous1.jpeg" alt="industrie bord lac" width="580px" height="350px"/>
          </div>



               {/* div image 2 */}
               <div className={styles.whoWeAre__pictureTwo}>
               <Image className={styles.img} src="/quisommesnous2.jpeg" alt="industrie bord lac" width="580px" height="350px"/>
               </div>


               {/* div text 2 */}
          <section className={styles.whoWeAre__sectionTwo}>
                    <h3 >Quels sont les avantages de nos formations à distance ?</h3>
                    <ul>
                         <li>Des formations avec un expert reconnu</li>
                         <li>Des formations adaptées à votre rythme :
                              <ul>
                                   <li>Des horaires adaptés voir modifiables</li>
                                   <li>Peu de temps pris pour la formation dans la journée, en général 3 h.</li>
                                   <li>Les réponses aux questions sont immédiates et interactives</li>
                              </ul>
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

          </article>
               
     </Layout>
     </div>
     )
}