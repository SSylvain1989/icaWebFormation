// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";

export default function Formations () {
     return(
          <div>
               <Layout page='ICA - Nos Formations et tarifs'>
                    <h2><strong>ICA - </strong>Nos formations et tarifs</h2>
               <br/>
               <h3 >La formation est dispensée par le formateur qui est toujours en ligne avec les participants. 
               </h3>
               <br/>
               <p>C'est une formation distancielle synchrone.
               </p>
               <p>Également appelée classe virtuelle ou Webclass ou encore Webformation.</p>
               <br/>
               <p>Les <strong>interactions sont permanentes </strong>et<strong>en direct</strong>.</p>
               <p>Les apprenants visualisent le formateur à distance et le contenu de la formation.
               </p>
               <br/>
               <h3 >Quels sont les avantages de nos formations à distance ? 
               </h3>
               <br/>
               <ul>
               <li>- Des formations avec un expert reconnu	
</li>
               <li>- Des formations adaptées à votre rythme :	</li>
               <ul>
               <li>- Des horaires adaptés voir modifiables</li>
               <li>- Peu de temps pris pour la formation dans la journée, en général 3 h.</li>
               <li>- Les réponses aux questions sont immédiates et interactives</li>
               </ul>
               <li>- Un formateur "présent" qui répond à toutes les questions</li>
               <li>- Des participants qui échangent entre eux	</li>
               <li>- Des exercices issus de cas concrets pour une bonne adaptabilité des formations</li>
               <li>- De nombreuses photos d'instruments installés sur site et utilisés en formation</li>
               <li>- Pas de déplacement pour les apprenants (et donc moins de pollution !)</li>
               <li>- Pas de coûts induits (hôtel, restauration, etc.)</li>
               <li>- Possibilité de personnaliser la formation avec votre matériel.</li>
               </ul>
     </Layout>
     </div>
     ) 
}
{/* <table>
     <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
     </tr>
</table> */}