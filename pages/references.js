// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";

export default function References () {
return(
     <div>
          <Layout page='ICA - Références'>
          <h2>Nos références</h2>
          <br/>
          <p>Nombreuses sont les sociétés qui nous ont fait confiance, soit en formation à distance soit en formation en présentiel :</p>
          <br/>
          <h3>En France :</h3>
          <p>TOTAL, AUDITRIX, Saint-Gobain, EXXONMOBIL, AIR LIQUIDE, ARKEMA, LYONDELL, SHELL, NESTLE, ARCELORMITTAL, ARJOWIGGINS
          Et d’autres …
          </p>
          <br/>
          <h3>En Nouvelle-Calédonie : </h3>
          <p>CDE (Sté des Eaux), ENERCAL (Producteur et distributeur d'électricité), VALE NC (Usine de traitement de nickel), KNS (Usine de traitement de nickel), SLN (Usine de traitement de nickel), CCI NC, Sté Le Froid (Agroalimentaire), GBNC (Agroalimentaire), NEODYME (Gestion des risques industriels), EEC (Distributeur d’électricité), PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures).</p> 
          <br/>
          <h3>A Wallis et Futuna : </h3>
          <p>SWAFEPP (Fournisseur et stockage d’hydrocarbures), VANUATU BREWING Ltd (Brasserie)
          </p>
          <br/>
          <h3>Au Vanuatu :</h3>
          <p>UNELCO (Producteur et distributeur d'énergie électrique et d'eau), PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)
          </p>
          <br/>

     </Layout>
     </div>
     )
}