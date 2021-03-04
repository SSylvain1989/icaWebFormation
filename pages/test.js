import Layout from "../components/Layout/Layout.js";
import Childtest from '../components/Childtest.js'


export default function test () {
  return(
       <div>
       <Layout page='ICA - Contact'>
       <h2 >test boucle tableau</h2>
       <div >
         <Childtest/>
       </div>
       </Layout>
       </div>
  )
}