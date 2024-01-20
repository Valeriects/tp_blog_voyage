
function converterDate(date) {
    const convertNormalDate = (date) => {
      const dateObject = new Date(date);
      const year = dateObject.getFullYear();
      const month = dateObject.getMonth() + 1; // Les mois vont de 0 à 11, donc ajoutez 1
      const day = dateObject.getDate();

      const normalDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;
      
      const hours = dateObject.getHours();
      const minutes = dateObject.getMinutes();
      const seconds = dateObject.getSeconds();

      const normalDateWithTime = `${normalDate} ${hours}:${minutes}:${seconds}`;


    return normalDateWithTime;
  };

  const normalDateWithTime = convertNormalDate(date);

  return (normalDateWithTime)
  
}


export default converterDate;