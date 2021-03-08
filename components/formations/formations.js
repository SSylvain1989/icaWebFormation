import styles from './formations.module.scss';


//==import pdf
import moncv from './../../public/pdf/cv_sylvain_sigonnez.pdf';

export default function Formations ({data, typeFormation}) {
console.log('tada',data);

const columns = ['Bureaux d’étude','Maintenance','Exploitation',typeFormation,'Durée','Répartition en modules' ]

  return(  
  <div className={styles.formations}>
<table className={styles.formations__table}>
    <thead className={styles.formations__thead}>
      <tr className={styles.formations__thead__tr}>
      {columns.map((column) => (
        <th key={column} className={styles.formations__thead__th}>
          {column}
          </th>
      ))
      }
      </tr>
    </thead>
      <tbody className={styles.formations__tbody}>
          {data.map(oneLine => (
            <tr key={oneLine} className={styles.formations__tr}>
                    {oneLine.map((oneCell) => (
                        <td key={oneCell} className={styles.formations__tr}>
                          {oneCell}
                        </td>
                    ))
                    }
              </tr>
          ))} 
      </tbody>
    </table>
  </div>
  )
}










// <table>
// <thead>
// <tr>
// {columns.map((column) => (
//   <th>
//     {column}
//     </th>
// ))
// }
// </tr>
// </thead>
// <tbody>
// {for (let index = 0; index < data.length; index++) {
// const element = array[index];

// }}
//     <tr>
      
//             {data.map((d) => (
//               <tr>
//                 <td>
//                   {d}
//                 </td>
//                 </tr>
//             ))
//             }
//       </tr>

// </tbody>
// </table>
// </div>
// )
// }












// <table>
// <thead>
// <tr>
// {columns.map((column) => (
//   <th>
//     {column}
//     </th>
// ))
// }
// </tr>
// </thead>
// <tbody>
// {instrumentation.forEach(element => {
//     <tr>
//             {data.map((d) => (
//                 <td>
//                   {d}
//                 </td>
//             ))
//             }
//       </tr>
//   })}
// </tbody>
// </table>
// </div>
// )
// }

// {
//   name : 'hidden',
// },
// { 
//   name: 'Télécharger la fiche',
//   formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data.split(" ",3).slice(0,7)}.pdf' download='ica-${row.cells[3].data}' >télécharger la fiche</a>`)
// },
// { 
//   name: 'voir la fiche',
//   formatter: (_, row) => html(`<a href='/pdf/${row.cells[3].data.split(" ",3).slice(0,7)}.pdf' target='_blank' >🔍voir la fiche</a>`),
// },
// ];


// const text = "/pdf/cv_sylvain_sigonnez.pdf";

// <Grid
// data={data}
// columns={columns}
// search={true}
// pagination={{
//   enabled: true,
//   limit: 10,
// }}
// /> 

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