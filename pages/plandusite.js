import Link from 'next/link';
import Layout from "../components/Layout/Layout.js";
import styles from '../styles/plandusite.module.scss';



export default function Plandusite () {
  return(

    <Layout page='ICA - Plan du site'>
<ul className={styles.plan}>
<li>
<Link href="/">
<a >
  Nos formations
</a>
</Link>
</li>
<li>
<Link href="/inscription">
<a >
Inscription et pédagogie
</a>
</Link>
</li>
<li>
<Link href="/quisommesnous">
<a >
  Qui sommes nous
</a>
</Link>
</li>
<li>
<Link href="/references">
<a >
  Nos références
</a>
</Link>
</li>
<li>
<Link href="/plandusite">
<a >
  Plan du site
</a>
</Link>
</li>
<li>
<Link href="/mentions">
<a >
  Mentions légales
</a>
</Link>
</li>
</ul>

</Layout>

  )
}