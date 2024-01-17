import { useSelector } from "react-redux";


function ListArticles() {
    // const { list } = useSelector((state) => state.article);
    const { listPictures } = useSelector((state) => state.picture);

    return (
        <main id="listArticles">
            <h1>Liste des articles déjà parus:</h1>
            {/* {list.map((item) => (
                <article key={item.id}>
                
            <h2>{item.title}</h2> */}
            
            {listPictures.map((item) => (
            <article key={item.id}>

                    <img src={`http://localhost:8000/img/${item.src}`} alt={item.alt} />

                    {/* <img src={"http://localhost:8000/img/" +item.src} alt={item.alt} /> */}
                </article> 
            ))}
            
                    {/* <p>{item.content}</p>
                    <p>{item.username}</p>
                    <p>{item.date_publication}</p>

                </article> */}

             {/* ))} */}
        </main>
    )
}


export default ListArticles;