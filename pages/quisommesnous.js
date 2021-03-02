// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout";

export default function whoWeAre () {
     return(
     <div>
          <Layout page='ICA - Qui sommes nous'>
               <h2 className="text-4xl mb-16"><span className="text-4xl">ICA - </span>Qui sommes nous</h2>
               <br/>
               <p className="text-left pl-4">Intervenant et formateur dans l'industrie depuis bien longtemps (plus de 30 ans !) je dispense aujourd'hui des formations à distance et sur site.</p>
               <br/>
               <p>
               Cette expérience de 38 ans dans les domaines de l'Instrumentation, la Régulation et les ATmosphères EXplosives (ATEX) est mise à profit dans mes formations.
               </p>
               <br/>
               <p className="text-left pl-4">
               Ma valeur ajoutée :
               Un savoir-faire en formation de plusieurs années
               Une adaptation de la formation à votre environnement industriel
               La compréhension des apprenants car moi-même intervenant en industrie

               Un agrément de formateur d'adultes de la DFPC
               </p>
               <br/>
               <p className="text-left pl-4">
               Et enfin une passion : la formation parce que former c'est transmettre, c'est partager !
               </p>
               <br/>

     </Layout>
     </div>
     )
}