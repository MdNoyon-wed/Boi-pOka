const getStoredBook = ()=>{
  const storedBookSTR = localStorage.getItem("readList");
  if(storedBookSTR){
    const storBookData = JSON.parse(storedBookSTR);
    return storBookData;
  }
  else{
    return[];
  }

}
const addToStoredDb= (id)=>{

  const storBookData = getStoredBook();

  if(storBookData.includes(id)){
    alert("bhai ei di exist")

  }
  else{
    storBookData.push(id);
    const data = JSON.stringify(storBookData);
    localStorage.setItem('readList',data)
  }
}

export{addToStoredDb,getStoredBook};