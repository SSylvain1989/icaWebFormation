import { Grid } from "gridjs-react";
import { html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import styles from './formations.module.scss';

//==import pdf
import moncv from './../../public/pdf/cv_sylvain_sigonnez.pdf';

export default function Formations ({data, typeFormation}) {
console.log(data);

const columns = ['Bureaux d’étude','Maintenance','Exploitation', typeFormation,'Durée','Répartition en modules' ,
{ 
  name: 'Télécharger la fiche',
  formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data}.pdf' download='ica-${row.cells[3].data}' >télécharger la fiche</a>`)
},
{ 
  name: 'Voir la fiche',
  formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data}.pdf' target='_blank' >voir la fiche</a>`)
},
];


const text = "/pdf/cv_sylvain_sigonnez.pdf";
  return(  
  <div className={styles.formations}>
      <a  href={text} target="_blank" download="quisommesnous">pdf</a>
      <a  href={moncv} target="_blank" download="quisommesnous">pdf</a>
      <br/>
      <a  href="/pdf/Les responsabilités en ATEX.pdf" download="photojpeg">jpeg</a>
      <br/>

      <a  href="/images/ica-logo.png" download="photopng">png</a>



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


import test from '../../public/images/ica-logo.png';

import Image from 'next/image';

