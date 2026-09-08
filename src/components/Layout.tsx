import Link from 'next/link';
import type { ReactNode } from 'react';
import Menu from './Menu';
import styles from './Layout.module.css';
export default function Layout({ children }: { children: ReactNode }) { return <div className={styles.layout}><a className={styles.skip} href="#conteudo">Pular para o conteúdo</a><header className={styles.header}><Link className={styles.brand} href="/" aria-label="Destino sem Fim — início"><span className={styles.symbol} aria-hidden="true">↗</span> Destino sem Fim</Link><Menu /></header><main id="conteudo" className={styles.main}>{children}</main><footer className={styles.footer}><Link className={styles.footerBrand} href="/">Destino sem Fim</Link><p>Novos caminhos. Boas histórias.</p></footer></div>; }

