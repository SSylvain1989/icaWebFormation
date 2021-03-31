// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Image from "next/image";
import Layout from "../components/Layout/Layout.js";
import styles from "../styles/inscription.module.scss";

export default function Registration () {
  return(
    <> 
    <div>

      <Layout page='ICA - Inscriptions formations'>

          <div className={styles.wrapper}>
            <Image className={styles.img} src="/images/schema.png" alt="schema pedagogie" width="810px" height="135px" />
          </div>

      <h3>Inscriptions :</h3>
                <p>Très simple !
                        Après votre accord sur notre proposition commerciale, il vous suffit de nous envoyer la liste des participants et la formation peut débuter.
                </p>
                  
                <h3>Suivi pédagogique :	</h3>
                <p>Le suivi pédagogique est constant pendant la formation.
                Le formateur s'adapte au niveau des participants et répond à toutes les questions.
                En fin de formation, une évaluation est réalisée par les participants suivant les objectifs de la formation.</p>
                <div className={styles.wrapperOne}>
            <Image className={styles.img} src="/images/inscription2.webp" alt="vannes d'industrie" width="400px" height="250px" />
          </div>

                <h3>Évaluation :</h3>
                <p>A la suite de la formation, les participants sont évalués suivant les objectifs de la formation.
                La correction de l'évaluation est orale et discutée avec les participants</p>

                <h3>Bilan pédagogique :	</h3>
                <p>Ce bilan est réalisé après la formation. Il permet de vérifier la satisfaction des participants.
                C'est aussi un document traçant les échanges entre le formateur et chaque participant.</p>

                <h3>Et après la formation ?</h3>
                <p>Nous attachons une grande importance aux bilans pour améliorer les formations et surtout cadrer au mieux vos objectifs.
                </p>


                <p>Plusieurs moments sont accordés au bilan :
                </p>
                <ul>
                    <li> Tout d’abord un retour sur la formation passée (durée, contenu, etc.) pour si besoin, l'améliorer et vérifier la concordance avec les objectifs visés,</li>
                    <li> Ensuite une analyse et prise en compte des appréciations des participants suivant leurs propres objectifs,
                    </li>
                    <li> Et avec les décideurs, discussion sur le retour et l'atteinte des objectifs de la formation.
                    </li>
                </ul>

      </Layout>
    </div>
    </>
  )
}