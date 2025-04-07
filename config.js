const config = {
  style: "mapbox://styles/mapbox/light-v11",
  accessToken:
    "pk.eyJ1Ijoic2Fsb21lLWVzdGV2ZXMiLCJhIjoiY204eWkyZnk2MDE2OTJqc2R5NmhiMjRzOCJ9.wnHkpLGXQCZcU-oYuc-mjQ",
  CSV: "https://raw.githubusercontent.com/renascenca/RankingEscolas_MapaArtes/refs/heads/main/RankingEscolas_Artisticas_Mapa.csv",
  center: [-11.0897451, 39.7035119], //Lng, Lat
  zoom: 6, //Default zoom
  title: "Onde se ensina artes em Portugal?",
  description:
    "Navegue no mapa para explorar as escolas - públicas, privadas e profissionais - que oferecem ensino artístico, no ensino secundário, em Portugal.",
  sideBarInfo: ["Escola", "Tipo de ensino", "Vertente no secundário"],
  popupInfo: ["Escola"],
  filters: [
    {
      type: "checkbox",
      title: "Tipo de Escola: ",
      columnHeader: "Tipo de ensino",
      listItems: [
        "Escola artística",
        "Ensino Secundário com Artes Visuais",
        "Escola profissional",
      ],
    },
    {
      type: "dropdown",
      title: "Distrito: ",
      columnHeader: "Distrito",
      listItems: [
        "Açores",
        "Aveiro",
        "Beja",
        "Braga",
        "Bragança",
        "Castelo Branco",
        "Coimbra",
        "Estrangeiro",
        "Évora",
        "Faro",
        "Guarda",
        "Leiria",
        "Lisboa",
        "Madeira",
        "Portalegre",
        "Porto",
        "Santarém",
        "Setúbal",
        "Viana do Castelo",
        "Vila Real",
        "Viseu",
      ],
    },
  ],
};
