import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { fetchArticles } from './store/slices/articles.js';

function App() {

  const dispatch = useDispatch();

  const getListArticle = useSelector((state) => state.article.list);

  console.log("liste :", getListArticle);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);



  return (
    <>
      <h1>affichage</h1>

      {/* <p>{getArticles.title}</p> */}
      {getListArticle.map((item) => (
        
        <article key={item.id} >
        
          <h2>{item.title}  <span>{ Date(item.date_publication) }</span></h2>
          <p>Catégorie: {item.cat_name}</p>

          <p>{item.content}</p>
          {/* <ul>
            {item.pictures.map((picture) => {
              <img src={picture.src} alt="" />
            })}
          </ul> */}

        </article>

      ))}
    </>
  )
}

export default App
