import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Destino sem Fim | Um novo caminho começa aqui', template: '%s | Destino sem Fim' }, description: 'Descubra destinos pelo mundo e encontre inspiração para sua próxima viagem.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body><Layout>{children}</Layout></body></html>; }

