// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout";

export default function References () {
return(
     <div>
          <Layout page='ICA - Références'>
          <h2 className="text-4xl mb-16"><span className="text-4xl">ICA - </span>Nos références</h2>
          <br/>
          <p className="text-left pl-4">Nombreuses sont les sociétés qui nous ont fait confiance, soit en formation à distance soit en formation en présentiel :</p>
          <br/>
          <h4 className="text-left pl-4 text-2xl">En France :</h4>
          <p className="text-left pl-4">TOTAL, AUDITRIX, Saint-Gobain, EXXONMOBIL, AIR LIQUIDE, ARKEMA, LYONDELL, SHELL, NESTLE, ARCELORMITTAL, ARJOWIGGINS
          Et d’autres …
          </p>
          <br/>
          <h4 className="text-left pl-4 text-2xl">En Nouvelle-Calédonie : </h4>
          <p className="text-left pl-4">CDE (Sté des Eaux), ENERCAL (Producteur et distributeur d'électricité), VALE NC (Usine de traitement de nickel), KNS (Usine de traitement de nickel), SLN (Usine de traitement de nickel), CCI NC, Sté Le Froid (Agroalimentaire), GBNC (Agroalimentaire), NEODYME (Gestion des risques industriels), EEC (Distributeur d’électricité), PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures).</p> 
          <br/>
          <h4 className="text-left pl-4 text-2xl">A Wallis et Futuna : </h4>
          <p className="text-left pl-4">SWAFEPP (Fournisseur et stockage d’hydrocarbures), VANUATU BREWING Ltd (Brasserie)
          </p>
          <br/>
          <h4 className="text-left pl-4 text-2xl">Au Vanuatu :</h4>
          <p className="text-left pl-4">UNELCO (Producteur et distributeur d'énergie électrique et d'eau), PACIFIC ENERGY (Fournisseur et stockage d’hydrocarbures)
          </p>
          <br/>

     </Layout>
     </div>
     )
}