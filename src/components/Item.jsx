import { Button, StyledLinkList, ImgList,ImgTransition1,ImgTransition2 } from "../tools/styledComponents";
const Item = ({ item }) => {
   return (
      <>
         {item ?
            <StyledLinkList to={`/${item.productId}/${item.id}`} className="LinkRoute">
               <div className="d-inline-flex p-3 bd-highligh">
                  <div className="text-center flex-item">
                     <div className="div1">
                        <div className="images">
                        <ImgList src={item.imgId} />
                        </div>
                        <div className="div2">
                        <ImgList src={item.imgId2} />
                        </div>
                     </div>
                     <div className="m-4">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <Button>Comprar</Button>
                     </div>
                  </div>
               </div>
            </StyledLinkList>
            : <div>Cargando...</div>
         }
      </>
   )
}
export default Item;