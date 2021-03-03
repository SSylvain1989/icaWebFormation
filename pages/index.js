// pour plus de simplicité on exporte directement notre fonction
// ça évite la confusion si plusieurs composants à la suite , par contre fini les fléchées.

import Layout from "../components/Layout/Layout.js";

export default function Home () {
  return(
    <div>
      <Layout page='ICA - Web Formation'>
<h1>ICA - Formation à distance en ligne avec formateur</h1>
<p>ICA WebFormation vous propose des formations à distance modulées en courtes séances de 3 heures en général, très appropriées si vous ne souhaitez pas dédier toute votre journée à la formation. 
Ces formations modulaires sont aussi prévues pour être dispensées à l’étranger : nous adaptons notre intervention à votre planning !
Ces formations peuvent aussi être dispensées par demi-journée ou journée.




</p>
<br/>
<p>La formation est dispensée par le formateur qui est toujours en ligne avec les participants. 
C'est une formation distancielle synchrone.
Également appelée classe virtuelle ou Webclass ou encore Webformation.</p>
<br/>
<p> Les interactions sont permanentes et en direct.
Les apprenants visualisent le formateur à distance et le contenu de la formation soit sur leur micro-ordinateur soit par vidéo-conférence.</p>
<br/>
      </Layout>
    </div>
  )
}