export interface Destino { id: string; nome: string; localizacao: string; categoria: string; imagem: string; alt: string; resumo: string; descricao: string; destaques: string[]; }
export const destinos: Destino[] = [
  {
    "id": "grecia",
    "nome": "Grécia",
    "localizacao": "Europa · Mediterrâneo",
    "categoria": "Ilhas & história",
    "imagem": "/images/grecia.jpg",
    "alt": "Casas brancas na paisagem de Santorini, na Grécia",
    "resumo": "Entre o azul do Egeu e histórias milenares.",
    "descricao": "A Grécia convida a percorrer ruínas antigas, vilas de casas brancas e ilhas banhadas pelo Mediterrâneo. Da Acrópole de Atenas às paisagens de Santorini, cada parada aproxima história, gastronomia e vida à beira-mar.",
    "destaques": [
      "Conhecer a Acrópole de Atenas",
      "Passear pelas vilas de Santorini",
      "Experimentar a culinária grega"
    ]
  },
  {
    "id": "seoul",
    "nome": "Seoul",
    "localizacao": "Coreia do Sul · Ásia",
    "categoria": "Cidade & cultura",
    "imagem": "/images/seoul.jpg",
    "alt": "Palácio Deoksugung em Seoul, na Coreia do Sul",
    "resumo": "Tradição e criatividade no ritmo da cidade.",
    "descricao": "Seoul, chamada Seul em português, reúne palácios, bairros históricos e uma cena urbana vibrante. Entre mercados, cafés e ruas movimentadas, a capital sul-coreana oferece diferentes formas de conhecer a cultura do país.",
    "destaques": [
      "Conhecer o Palácio Gyeongbokgung",
      "Caminhar por Bukchon Hanok Village",
      "Explorar as lojas e sabores de Myeongdong"
    ]
  },
  {
    "id": "egito",
    "nome": "Egito",
    "localizacao": "África · Vale do Nilo",
    "categoria": "História & descobertas",
    "imagem": "/images/egito.jpg",
    "alt": "Pirâmides de Gizé na paisagem desértica do Egito",
    "resumo": "Uma viagem por paisagens e histórias monumentais.",
    "descricao": "O Egito guarda vestígios de uma civilização milenar em meio a paisagens de deserto e às margens do Nilo. As pirâmides de Gizé e os templos de Luxor convidam a descobrir a arquitetura, a arte e as histórias do Egito antigo.",
    "destaques": [
      "Contemplar as pirâmides de Gizé",
      "Conhecer os templos de Luxor",
      "Descobrir a paisagem do rio Nilo"
    ]
  },
  {
    "id": "filipinas",
    "nome": "Filipinas",
    "localizacao": "Ásia · Sudeste Asiático",
    "categoria": "Praias & natureza",
    "imagem": "/images/filipinas.jpg",
    "alt": "Águas e formações rochosas de El Nido, nas Filipinas",
    "resumo": "Ilhas, lagoas e um horizonte de possibilidades.",
    "descricao": "As Filipinas encantam com ilhas tropicais, praias e formações rochosas cercadas pelo mar. Em Palawan, as paisagens de El Nido convidam a explorar lagoas e apreciar a natureza com calma, enquanto outros destinos do arquipélago revelam novas culturas e cenários.",
    "destaques": [
      "Explorar as paisagens de El Nido",
      "Conhecer as praias de Palawan",
      "Experimentar a gastronomia filipina"
    ]
  }
];
export function getDestino(id: string) { return destinos.find((destino) => destino.id === id); }

