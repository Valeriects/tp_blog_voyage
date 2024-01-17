import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Fragment } from "react";
// import { useSelector, useDispatch } from 'react-redux';

import { fetchArticles } from './store/slices/articles.js';
import {fetchPictures} from './store/slices/pictures.js';
import Header from "./Components/Containers/Header.jsx";
import Router from "./Components/Routers/Router.jsx";
import Footer from "./Components/Containers/Footer.jsx";

function App() {

  const dispatch = useDispatch();

  // const getListArticle = useSelector((state) => state.article.list);

  // console.log("liste :", getListArticle);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchPictures());
  }, []);



  return (
    <Fragment>

      <Header />
      
      <Router />
      
      <Footer />
      
     

      {/* <p>{getArticles.title}</p> */}
      {/* {getListArticle.map((item) => (
        
        <article key={item.id} >
        
          <h2>{item.title}  <span>{ Date(item.date_publication) }</span></h2>
          <p>Catégorie: {item.cat_name}</p>

          <p>{item.content}</p> */}
          {/* <ul>
            {item.pictures.map((picture) => {
              <img src={picture.src} alt="" />
            })}
          </ul> */}

        {/* </article>

      ))} */}
    </Fragment>
  )
}

export default App
