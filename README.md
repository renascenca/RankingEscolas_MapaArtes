# Ranking das Escolas 2024 - Mapa das Artes Visuais

## Mapbox
Para fazer uma página deste género é preciso ter uma conta no Mapbox e um 'access token' - inserido no ficheiro config.js. Sempre que for preciso fazer um projeto destes, tem de criar-se um novo estilo no Mapbox Studio e um novo access token para não alterar projetos anteriores. A Renascença tem uma conta no Mapbox.

## Notas

Os dados em bruto estão no csv Escolas.csv e estão linkados para o ficheiro RankingEscolas_Artisticas_Mapa.csv neste repositório.
O link para os dados no ficheiro config.js só pode ser feito a partir do ficheiro raw dos dados no Github (é só copiar o URL e colar no campo correspondente) porque é público. A importação do ficheiro local ou a partir do Google Sheets vai dar erro por causa de uma nova configuração de segurança.
Se as cores não mudarem, basta fazer upload de um novo csv. ATENÇÃO: a estrutura dos dados (nomes das colunas) tem de ser exatamente igual a esta, para não crashar o javascript.
A legenda é editada no ficheiro HTML e as cores, no ficheiro javascript.

## Tutoriais
Feito com base no template 'Finder', da coleção 'Impact tools' do Mapbox.
Demo:
https://www.mapbox.com/impact-tools/finder

Tutorial em vídeo:
https://www.mapbox.com/webinars/finder-map-app

