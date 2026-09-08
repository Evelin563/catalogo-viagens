import Link from 'next/link';
import styles from '@/styles/Portal.module.css';
export default function NotFound() { return <section className={styles.section}><div className={styles.pageHeading}><p className={styles.eyebrow}>404 · FORA DO ROTEIRO</p><h1>Este caminho não existe.</h1><p>Mas há outros lugares esperando por você.</p></div><Link href="/destinos" className={styles.button}>Explorar destinos ↗</Link></section>; }
