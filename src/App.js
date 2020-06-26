import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias'



function App() {

  //state que guarda la categoria a consultar
  const [categoria, actualizarcategoria] = useState('');

  //state que guarda la lista de noticias con base a la categoria
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApiNoticias = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=34c367febf8e497e8af89b5e7b950452`;

      const respuesta = await fetch(url);
      const noticia = await respuesta.json();
      guardarNoticias(noticia.articles);
    }
    consultarApiNoticias()
  },[categoria])
  return (
    <Fragment>
      <Header
        titulo={"Buscador de noticias"}
      />

      <div className="container white">
        <Formulario
          actualizarcategoria={actualizarcategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
    
  );
}

export default App;
