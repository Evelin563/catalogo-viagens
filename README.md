# Destino sem Fim — Catálogo de Viagens

Portal educacional desenvolvido em Next.js, React e TypeScript. Inicializado com npx create-next-app@latest, App Router, ESLint e CSS Modules, sem Tailwind.

## Executar

Requer Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para produção: npm run build e npm start. Para verificar o código: npm run lint e npx tsc --noEmit.

## Rotas

- /: apresentação e link para os destinos.
- /destinos: quatro destinos renderizados com map() e CardDestino.
- /destinos/[id]: páginas dinâmicas de Grécia, Seoul, Egito e Filipinas.
- IDs desconhecidos apresentam a página 404.

## Organização

- src/app: páginas, layout raiz, metadados e tratamento 404.
- src/components: Layout, Menu e CardDestino, com CSS Modules.
- src/data/destinos.ts: interface Destino, array local e consulta por ID.
- src/styles/Portal.module.css: estilos responsivos das páginas.
- public/images: fotos locais; a aplicação não depende de imagens externas durante a navegação.

O Layout envolve todas as páginas e reutiliza cabeçalho, navegação com next/link e rodapé. Apenas Menu é um componente cliente, para identificar a rota ativa. As páginas de detalhes usam generateStaticParams, params assíncronos e metadados próprios. Imagens são exibidas com next/image, texto alternativo e dimensões responsivas.

## Imagens

Fotografias provenientes do Wikimedia Commons. Consulte public/images/creditos.json para origem, autor e licença de cada arquivo. Conteúdo turístico meramente ilustrativo; o portal não realiza reservas.

Entrega local, sem publicação em GitHub, conforme solicitado.

