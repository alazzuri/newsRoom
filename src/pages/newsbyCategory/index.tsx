//REACT
import React from "react";

//ROUTER
import { useParams } from "react-router-dom";
import NewsContainer from "../../containers/NewsContainer";

const news = [
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
  {
    id: 1722425,
    imgUrl: "https://images.ole.com.ar/2020/08/30/85jaZmVsh_1200x630__1.jpg",
    sourceName: "Olé",
    title: "Manu Ginóbili: pedaleó 30 kilómetros con un invitado de lujo",
    url:
      "https://www.ole.com.ar/fuera-de-juego/manu-gonobili-tim-duncan-biciclate-30-kilometros_0_oVb5zM8xp.html",
  },
];

const NewsByCategory = () => {
  const { name } = useParams<{ name: string }>();

  return <NewsContainer news={news} />;
};

export default NewsByCategory;
