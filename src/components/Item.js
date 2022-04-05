const Item =({name,image,position})=>{
   if(position==2){
    return(
        <>
         <div className="text-start m-3"><h3>{name}</h3><br/><img src={image}/></div>
        </>
     )
   }
   else{
    return(
        <>
         <div className="text-end m-3"><h3>{name}</h3><br/><img src={image}/></div>
        </>
     )
   }
}
export default Item;