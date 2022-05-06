import {FooterStyle,ButtonFooter,ListUl,ListLi,Info,DecorationLine} from "../tools/styledComponents";
const Footer = () => {
return(
    <>
    <DecorationLine/>
    <FooterStyle>
        <Info>CONTACTO</Info>
        <ListUl >
            <ListLi key='001'></ListLi> 
            <ListLi key='111'>0810 120 7758 </ListLi> 
            <ListLi key='222'>AYUDA@ASTERALES.COM.AR  </ListLi>
            <ListLi key='333'>Instagram </ListLi>
        </ListUl>
        <ButtonFooter to="/register">Registrate para recibir ofertas</ButtonFooter>
    </FooterStyle>
    </>
)
}
export default Footer;