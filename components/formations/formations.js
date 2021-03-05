import { Grid } from "gridjs-react";
import { html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import styles from './formations.module.scss';

//==import pdf
import learning1 from '../../public/base.pdf';
import moncv from '../../public/cv_sylvain_sigonnez.pdf';
import quisommes from '../../public/quisommesnous1.jpeg';
import test from '../../public/ica-logo.png';
// import test from '../../public/ica-logo.png';





export default function Formations ({data, typeFormation}) {
console.log(data);

const columns = ['Bureaux d’étude','Maintenance','Exploitation', typeFormation,'Durée','Répartition en modules' ,
{ 
  name: 'fiches formations',
  formatter: (_, row) => html(`<a href='mailto:${row.cells[3].data}'>télécharger la fiche</a>`)
},];

  return(  
  <div className={styles.formations}>
      <a className="cv" href={moncv} download="cv sylvain sigonnez">pdf</a>
      <br/>
      <a className="cv" href={quisommes} download="photojpeg">jpeg</a>
      <br/>

      <a className="cv" href={test} download="photopng">png</a>



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


