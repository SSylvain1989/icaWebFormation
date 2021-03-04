import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import styles from './formations.module.scss';
import dataform from '../../data/dataform.js';
import Childtest from '../Childtest.js';


export default function Formations () {
  console.log("dataform",dataform);


  // const data = [
  //   ['Adaptée', 'Préconisée','Adaptée','Instrumentation en 1 jour','1 jour ! (7h30)','2 x 3h + 1 x 1h30'],
  //   ['Adaptée','Adaptée','Adaptée', 'Bases de l’instrumentation ','3 jours (22h30)','7 x 3h + 1 x 1h30'],
  //   ['Adaptée','Adaptée','Adaptée', 'Les mesures de débit ','2 jours (15h)','5 x 3h'],
  //   ['Adaptée','Adaptée','Adaptée', 'Les mesures de température ','2 jours (15h)','5 x 3h'],
  //   ['Adaptée','Adaptée','Préconisée', 'Initiation à la métrologie ','2 jours (15h)','5 x 3h'],
  //   ['Adaptée','Adaptée','Inadaptée', 'Optimisation des mesures ','3 jours (22h30)','12 x 3h + 1 x 1h30'],
  //   ['Adaptée','Adaptée','Adaptée', 'Mécanique des fluides (dont les pertes de charge) ','2 jours (5h)erreur?','5 x 3h']
  // ];
  const columns = ['Bureaux d’étude','Maintenance','Exploitation', 'INSTRUMENTATION','Durée','Répartition en modules' ];
  
  return(  
  <div className={styles.formations}>
    {
        dataform.map((oneProjet) => (
        <div>
{oneProjet}
</div>
      ))
    }


 <Grid
  data={data}
  columns={columns}
  search={true}
  pagination={{
    enabled: true,
    limit: 10,
  }}
 /> 

    </div>
  )

}


