import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../actions";
import { HOME_FEED } from "../../utils/constants";
import NewsCard from "../../components/NewsCards";
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

const Home = () => {
  const lala = useSelector((state) => state);
  const dispatch = useDispatch();

  return <NewsContainer news={news} />;
};

export default Home;
