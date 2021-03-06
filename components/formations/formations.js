import { Grid } from "gridjs-react";
import { html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import styles from './formations.module.scss';

//==import pdf
import moncv from './../../public/pdf/cv_sylvain_sigonnez.pdf';

export default function Formations ({data, typeFormation}) {
console.log(data);

const columns = ['Bureaux d’étude','Maintenance','Exploitation',typeFormation,'Durée','Répartition en modules' ,
{
  name : 'hidden',
},
{ 
  name: 'Télécharger la fiche',
  formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data.split(" ",3).slice(0,7)}.pdf' download='ica-${row.cells[3].data}' >télécharger la fiche</a>`)
},
{ 
  name: 'voir la fiche',
  formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data.split(" ",3).slice(0,7)}.pdf' target='_blank' >🔍voir la fiche</a>`),
},
];


const text = "/pdf/cv_sylvain_sigonnez.pdf";
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


// import test from '../../public/images/ica-logo.png';

// import Image from 'next/image';

// name: 'Télécharger la fiche',
// formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data.trim().slice(0,7)}.pdf' download='ica-${row.cells[3].data}' >télécharger la fiche</a>`)
// },


{/* <br/>
<a  href="/pdf/cv_sylvain_sigonnez.pdf" download="cv_sylvain_sigonnez">telecharger cv</a>
<br/>
<a  href="/pdf/cv_sylvain_sigonnez.pdf" target='_blank' >voir cv</a>
<br/>
<a  href="/pdf/cvsylvain.pdf" download="cv_sylvain_sigonnez">telecharger cv tout collé</a>
<br/>
<a  href="/pdf/cvsylvain.pdf" target='_blank' >voir cv tout collé</a>
<br/> */}