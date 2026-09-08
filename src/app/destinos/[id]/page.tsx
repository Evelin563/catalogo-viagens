import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { destinos, getDestino } from '@/data/destinos';
import styles from '@/styles/Portal.module.css';
type Props = { params: Promise<{ id: string }> };
export function generateStaticParams() { return destinos.map(({ id }) => ({ id })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const destino = getDestino((await params).id); return { title: destino?.nome ?? 'Destino não encontrado', description: destino?.resumo }; }
export default async function DestinoPage({ params }: Props) { const destino = getDestino((await params).id); if (!destino) notFound(); return <article className={styles.section}><Link className={styles.back} href="/destinos">← Todos os destinos</Link><header className={styles.detailHeading}><p className={styles.eyebrow}>{destino.localizacao}</p><h1>{destino.nome}</h1><p>{destino.resumo}</p></header><div className={styles.detailImage}><Image src={destino.imagem} alt={destino.alt} fill priority sizes="(max-width: 1200px) 100vw, 1200px" /></div><div className={styles.detailContent}><section><p className={styles.eyebrow}>{destino.categoria}</p><h2>Um lugar para viver de perto.</h2><p>{destino.descricao}</p></section><aside className={styles.highlights}><h2>Para guardar na memória</h2><ul>{destino.destaques.map(item => <li key={item}>{item}</li>)}</ul></aside></div><Link className={styles.button} href="/destinos">Descobrir outros destinos <span aria-hidden="true">↗</span></Link></article>; }
