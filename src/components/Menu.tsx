'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Layout.module.css';
export default function Menu() { const pathname = usePathname(); return <nav className={styles.nav} aria-label="Navegação principal">{[{ href: '/', label: 'Início' }, { href: '/destinos', label: 'Destinos' }].map(({ href, label }) => { const active = href === '/' ? pathname === href : pathname.startsWith(href); return <Link key={href} href={href} aria-current={active ? 'page' : undefined}>{label}</Link>; })}</nav>; }
