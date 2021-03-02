// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout";

export default function Registration () {
  return(
    <div>
      <Layout page='ICA - Inscriptions formations'>
      <h2 className="text-4xl mb-16"><span className="text-4xl">ICA - </span>Inscription</h2>
      <br/>
      <h3 className="text-left pl-4 text-2xl">Inscriptions :</h3>
<p className="text-left pl-4">Très simple !</p>
<p className="text-left pl-4" >Après votre accord sur notre proposition commerciale, il vous suffit de nous envoyer la liste des participants et la formation peut débuter.
</p>
<br/>	
<h3 className="text-left pl-4 text-2xl">Suivi pédagogique :	</h3>
<p className="text-left pl-4">Le suivi pédagogique est constant pendant la formation.
Le formateur s'adapte au niveau des participants et répond à toutes les questions.
En fin de formation, une évaluation est réalisée par les participants suivant les objectifs de la formation.</p>
<br/>
<h3 className="text-left pl-4 text-2xl">Évaluation :</h3>
<p className="text-left pl-4">A la suite de la formation, les participants sont évalués suivant les objectifs de la formation.
La correction de l'évaluation est orale et discutée avec les participants</p>
<br/>
<h3 className="text-left pl-4 text-2xl">Bilan pédagogique :	</h3>
<p className="text-left pl-4">Ce bilan est réalisé après la formation. Il permet de vérifier la satisfaction des participants.
C'est aussi un document traçant les échanges entre le formateur et chaque participant.</p>
<br/>
<h3 className="text-left pl-4 text-2xl">Et après la formation ?</h3>
<p className="text-left pl-4">Nous attachons une grande importance aux bilans pour améliorer les formations et surtout de cadrer au mieux vos objectifs.
</p>
<br/>
<p className="text-left pl-4 text-lg">Plusieurs moments sont accordés au bilan :
</p>
<ul>
<li className="text-left pl-4">- Tout d’abord un retour sur la formation passée (durée, contenu, etc.) pour si besoin, l'améliorer et vérifier la concordance avec les objectifs visés,</li>
<li className="text-left pl-4">- Ensuite une analyse et prise en compte des appréciations des participants suivant leurs propres objectifs,
</li>
<li className="text-left pl-4">- Et avec les décideurs, discussion sur le retour et l'atteinte des objectifs de la formation.
</li>
</ul>

      </Layout>
    </div>
  )
}