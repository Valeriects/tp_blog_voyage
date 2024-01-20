// j'importe les useState car je vais créer mon state personnalisé

import { useState} from 'react';

//et ici on met l'import des datas
import { datas } from "../../utils/datas";

const datasTrie = datas.sort((a, b) => a.title.localeCompare(b.title));

//ici il faut commencer l'appellation de la fonction par "use"
//on fait du camelCase car ce n'est pas un composant, mais une fonction personnalisé pour être une state
function useSearchBarArticle() {
    //création d'une déstructuration de tableau 
    const [afficheList, setAfficheList] = useState(datasTrie);

    //ici on créé la fonction de recherche qui utilise la const créé pour trier les datas dans un nouveau tableau
    function searchArticle(e) {
        //on déclare une nouvelle constante pour stocker le tri du tableau en comparatnt et en le filtrant avec les mesures de sécurité adéquat
        const newList = datasTrie.filter((data) => //ne pas mettre d'accolades ici sinon la barre de recherche ne cherchera rien, on ne met pas les accolade car c'est une fonction sur une seule ligne, et le return est implicite
            data.title //les titres
                .toLowerCase() //mettre en minuscule
                .trim() //on enlève les espaces avatn et après
                .includes(e.target.value.toLowerCase().trim()) // et on recherche dans le tableau si on a la même valeur que la valeur de l'input en minuscule et sans espace avatn et après
        );

        // on met à jour l'affichage de la liste (afficheList), avec la constante qui filtre les datas triées
        setAfficheList(newList);

    }

    //et on retourne un tableau, celui destructuré dont on aura besoin dans la page Liste.jsx
    //comme ça, on récupèrera les données du tableau
    //l'affichage de la liste mise à jour et la fonction qui permet de faire la recherche
    return [afficheList, searchArticle];
}   

export default useSearchBarArticle;
