import Image from 'next/image';
import Link from 'next/link';
import type { Destino } from '@/data/destinos';
import styles from './CardDestino.module.css';
export default function CardDestino({ destino }: { destino: Destino }) { return <article className={styles.card}><Link href={`/destinos/${destino.id}`} className={styles.link}><div className={styles.image}><Image src={destino.imagem} alt={destino.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /><span className={styles.tag}>{destino.categoria}</span></div><div className={styles.body}><p className={styles.state}>{destino.localizacao}</p><h2>{destino.nome}</h2><p>{destino.resumo}</p><span className={styles.more}>Explorar destino <span aria-hidden="true">↗</span></span></div></Link></article>; }
