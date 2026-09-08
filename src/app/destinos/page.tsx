import type { Metadata } from 'next';
import CardDestino from '@/components/CardDestino';
import { destinos } from '@/data/destinos';
import styles from '@/styles/Portal.module.css';
export const metadata: Metadata = { title: 'Destinos' };
export default function DestinosPage() { return <section className={styles.section}><div className={styles.pageHeading}><p className={styles.eyebrow}>EXPLORE O MUNDO</p><h1>Para onde vamos?</h1><p>Mar, natureza, cultura e aventura. Encontre um lugar que combine com você.</p></div><div className={styles.listMeta}><span>Todos os destinos</span><span>{destinos.length} lugares para descobrir</span></div><div className={styles.destinationGrid}>{destinos.map(destino => <CardDestino key={destino.id} destino={destino} />)}</div></section>; }
