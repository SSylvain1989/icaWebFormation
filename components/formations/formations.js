import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";
import styles from './formations.module.scss';


export default function Formations ({data, typeFormation}) {
console.log(data);

const columns = ['Bureaux d’étude','Maintenance','Exploitation', typeFormation,'Durée','Répartition en modules' ];

  return(  
  <div className={styles.formations}>

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


