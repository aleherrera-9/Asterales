import { AddButton, StyledLinkList, ImgList,InfoCart } from "../tools/styledComponents";

const sliceName = (name) => {

   const str = new String(name);
   let sentencias = str.split(/, | -/);

   if (sentencias !== 'undefined') {
      return (
         <div>
            <InfoCart className="mt-1">{sentencias[0]}</InfoCart>
            <InfoCart>{sentencias[1]}</InfoCart>
         </div>
      )
   }
}

const Item = ({ item }) => {
   return (
     
         <StyledLinkList to={`/${item.productId}/${item.id}`} className="fadeIn">
            <div className="d-inline-flex pb-4 pt-5">
               <div className="text-center flex-item">
                  <div className="div1">
                     <div className="images">
                        <ImgList src={item.imgId} />
                     </div>
                     <div className="div2">
                        <ImgList src={item.imgId2} />
                     </div>
                  </div>
                  <div>
                     {item.name.length > 34
                        ? sliceName(item.name)
                        : <InfoCart className="mt-1">{item.name}</InfoCart>
                     }

                     {item.productId === 'outlet'
                        ? <div className="price-outlet">-25% off<p >${item.price}</p><p>${item.price - ((item.price / 100) * 25)}</p></div>
                        : <p>${item.price}</p>
                     }

                     <AddButton>Comprar</AddButton>
                  </div>
               </div>
            </div>
         </StyledLinkList>
   
   )
}
export default Item;