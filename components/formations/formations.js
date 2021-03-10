import styles from './formations.module.scss';

export default function Formations ({data, typeFormation}) {
const columns = ['Bureaux d’étude','Maintenance','Exploitation']

  return(  
  <div>
      <div className={styles.formations}>
      <table className={styles.formations__table}>
      {typeFormation === 'ATEX' 
      ?
      <>
      <caption className={styles.formations__atex}>Toutes nos formations sur les atmosphères explosives (ATEX) sont basées sur les directives 1999/92/CE et 2014/34/UE.
      Formateur intervenant en zones ATEX, certifié (et recertifié) par l’INERIS niveau 3 électrique et mécanique (non-électrique) tous les 3 ans.</caption> 
      <caption className={styles.formations__generic}> 👉  Formation sur mesure : donnez nous votre objectif sur <a href="mailto:contact@icawebformation.fr" className={styles.about__text}>contact@icawebformation.fr</a>  ou appelez nous au <a href="tel:+33644073309" className={styles.about__text}>+33 644 073 309</a> </caption>
      <caption className={styles.formations__tfoot}>* Avec ou sans certification de l’INERIS</caption>
</>
      :
      <caption className={styles.formations__generic}>👉  Formation sur mesure : donnez nous votre objectif sur <a href="mailto:contact@icawebformation.fr" className={styles.about__text}>contact@icawebformation.fr</a>  ou appelez nous au <a href="tel:+33644073309" className={styles.about__text}>+33 644 073 309</a> </caption> }
        <thead className={styles.formations__thead}>
          <tr>
            <th className={styles.formations__thead__th} rowSpan="2">{`FORMATIONS ${typeFormation}`}</th> 
            <th className={styles.formations__thead__title} colSpan="3">POUR QUI ? </th>
            <th className={styles.formations__thead__th} rowSpan="2">DURÉE </th> 
            <th className={styles.formations__thead__th} rowSpan="2">RÉPARTITIONS EN MODULES </th> 
            <th className={styles.formations__thead__th} rowSpan="2">FICHE FORMATION </th> 
            </tr>
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
                            <td key={oneCell} className={ `${oneCell === 'Adaptée' ? styles.formations__tdGreen : styles.formations__td}
                                                                                          ${oneCell === 'Inadaptée' ? styles.formations__tdRed : styles.formations__td}
                                                                                          ${oneCell === 'Préconisée' ? styles.formations__tdOrange : styles.formations__td}`}> 
                              {oneCell}
                            </td>
                        ))
                        }
                  </tr>
              ))} 
          </tbody>
          </table>
      </div>
      <div className={styles.formations__footer}>
        
      </div>
</div>
  )
}
