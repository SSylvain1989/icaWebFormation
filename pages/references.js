// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.
import Image from "next/image";
import Layout from "../components/Layout/Layout.js";
import styles from "../styles/references.module.scss";


export default function References () {
return(
     <div>
          <Layout page='ICA - Références'>
          <h2>Nombreuses sont les sociétés qui nous ont fait confiance, soit en formation à distance soit en formation en présentiel.</h2>
          <h3>En France :</h3>

                    <ul>
                         <li><a href="https://www.total.com/fr" target="_blank">TOTAL</a></li>
                         <li><a href="https://www.auditrix.com"target="_blank">AUDITRIX</a></li>
                         <li><a href="https://www.saint-gobain.com/fr"target="_blank">Saint-Gobain</a></li>
                         <li><a href="https://www.airliquide.com/fr"target="_blank">AIR LIQUIDE</a></li>
                         <li>EXXONMOBIL</li>
                         <li>ARKEMA</li>
                         <li>LYONDELL</li>
                         <li><a href="https://www.shell.com"target="_blank">SHELL</a></li>
                         <li><a href="https://www.nestle.com"target="_blank">NESTLE</a></li>
                         <li>ARCELORMITTAL</li>
                         <li>ARJOWIGGINS</li>
                    </ul>
                    <p>et d’autres …</p>

          <h3>En Nouvelle-Calédonie : </h3>
                    <ul>
                         <li><a href="https://cde.nc"target="_blank">CDE (Sté des Eaux)</a> </li>
                         <li><a href="https://www.enercal.nc"target="_blank">ENERCAL (Producteur et distributeur d'électricité)</a></li>
                         <li><a href="http://www.vale.nc"target="_blank">VALE NC (Usine de traitement de nickel), KNS (Usine de traitement de nickel)</a></li>
                         <li><a href="https://sln.eramet.com"target="_blank">SLN (Usine de traitement de nickel)</a> </li>
                         <li>CCI NC</li>
                         <li><a href="https://www.lefroid.nc"target="_blank">Sté Le Froid (Agroalimentaire)</a></li>
                         <li>GBNC (Agroalimentaire)</li>
                         <li>NEODYME (Gestion des risques industriels)</li>
                         <li>EEC (Distributeur d’électricité)</li>
                         <li><a href="https://p.energy/nouvelle-caledonie/"target="_blank">PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)</a></li>
                    </ul>
          <h3>A Wallis et Futuna : </h3>
          <ul>
               <li>SWAFEPP (Fournisseur et stockage d’hydrocarbures)</li>
               <li>VANUATU BREWING Ltd (Brasserie)</li>
          </ul>
          <h3>Au Vanuatu :</h3>
          <ul>
               <li>UNELCO (Producteur et distributeur d'énergie électrique et d'eau)</li>
               <li>PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)</li>
          </ul>

          <Image  className={styles.img} src="/images/2.webp" alt="un ordinateur" width="1250px" height="330px" load="lazy"/>
     </Layout>
     </div>
     )
}