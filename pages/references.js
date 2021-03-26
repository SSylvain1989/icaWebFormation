// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";

export default function References () {
return(
     <div>
          <Layout page='ICA - Références'>
          <h2>Nombreuses sont les sociétés qui nous ont fait confiance, soit en formation à distance soit en formation en présentiel.</h2>
          <h3>En France :</h3>
               <p> 
                    <a href="https://www.total.com/fr" target="_blank">TOTAL</a> ,
                    <a href="https://www.auditrix.com"target="_blank">AUDITRIX</a>, 
                    <a href="https://www.saint-gobain.com/fr"target="_blank">Saint-Gobain,
                    </a>  EXXONMOBIL,
                    <a href="https://www.airliquide.com/fr"target="_blank">AIR LIQUIDE</a> ,
                    ARKEMA,
                    LYONDELL,
                    <a href="https://www.shell.com"target="_blank">SHELL</a> ,
                    <a href="https://www.nestle.com"target="_blank">NESTLE</a> ,
                    ARCELORMITTAL,
                    ARJOWIGGINS
               et d’autres …
          </p>
          <h3>En Nouvelle-Calédonie : </h3>
               <p>
                    <a href="https://cde.nc"target="_blank">CDE (Sté des Eaux)</a> ,
                    <a href="https://www.enercal.nc"target="_blank">ENERCAL (Producteur et distributeur d'électricité)</a> ,
                    <a href="http://www.vale.nc"target="_blank">VALE NC (Usine de traitement de nickel), KNS (Usine de traitement de nickel)</a> ,
                    <a href="https://sln.eramet.com"target="_blank">SLN (Usine de traitement de nickel)</a> , 
                    CCI NC,
                    <a href="https://www.lefroid.nc"target="_blank">Sté Le Froid (Agroalimentaire)</a> ,
                    GBNC (Agroalimentaire),
                    NEODYME (Gestion des risques industriels),
                    EEC (Distributeur d’électricité),
                    <a href="https://p.energy/nouvelle-caledonie/"target="_blank">PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)</a> .
               </p> 
          <h3>A Wallis et Futuna : </h3>
          <p>SWAFEPP (Fournisseur et stockage d’hydrocarbures), VANUATU BREWING Ltd (Brasserie)
          </p>
          <h3>Au Vanuatu :</h3>
          <p>UNELCO (Producteur et distributeur d'énergie électrique et d'eau), PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)
          </p>

     </Layout>
     </div>
     )
}