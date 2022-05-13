import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
background-color: black;
border-color:  black;
border-radius: 0%;
font-size: 12px;
color: white;
padding: 10px;
margin: 5px;
    &:hover{
        background-color: #00c269;
        border-color:  black;
    }
`
const AddButtonWidget = styled(Link)`
background: #fff;
border: 1px solid #00c269;
color: #00c269;
cursor: pointer;
margin: 0;
padding:5px 25px;
text-decoration:none;
text-transform:uppercase;
line-height: 1.1rem;
box-sizing: border-box;
vertical-align: middle;
border-radius: 2px;
letter-spacing: 0.05em;
    &:hover{
        background:#00c269;
        color: white;
    }
`

const AddButton = styled.button`
background: #fff;
border: 1px solid #00c269;
color: #00c269;
cursor: pointer;
font-weight: 400;
margin: 0;
padding:5px 25px;
font-size: 13px;
text-transform:uppercase;
line-height: 1.1rem;
box-sizing: border-box;
vertical-align: middle;
border-radius: 2px;
letter-spacing: 0.05em;
    &:hover{
        background:#00c269;
        color: white;
    }
`

const StyledLink = styled(Link)`
text-decoration: none;
text-transform: lowercase;
text-decoration-line: none;
color:white;
    &:hover{
        color:white;
    }
`
const ImgCart = styled.img`
width:100px;
height:150px;
`

const ILContainer = styled.div`
color:black;
text-align:center;
`
const FooterStyle = styled.div`
font-size: 12px;
color: darkcyan;
text-align:center;
margin: 35px;
`
const ButtonFooter = styled(Link)`
border: none;
color:#00c269;
background-color: white;
text-transform: uppercase;
font-size: 12px;
padding: 15px;
margin: 15px;
font-weight: 600;
text-decoration: none;
text-decoration-line: none;
`
const ListUl = styled.ul`
list-style-type: none;
text-align: center;
`;
const ListLi = styled.li`
width: 50px;
height: 20%;
border-right: solid #000000 2px;
display: inline;
margin-right: 10px;
text-align: center;
font-weight: 600;
`
const Info = styled.p`
text-align: center;
padding: 10px;
margin: 15px;
font-weight: 600;
`
const InfoCart = styled.p`
text-align: center;
padding: 10px;
margin: 15px;
font-size:13px;
`
const ModalInfo = styled.div`
padding: 1rem;
font-size:13px;
text-decoration: none;
color: black;
text-align:center;
margin:15px;
font-size:11px;
border-top: 1px solid #a9a9a9;
border-bottom:px solid #a9a9a9;
    ${ImgCart}{
    width:60px;
    height:80px;
    }
`
const Order = styled.div`
padding: 1rem;
font-size:13px;
text-decoration: none;
color: black;
text-align:center;
font-size:15px;
font-weight: 400;
    ${StyledLink}{
    color: white;
    background:#00c269;
    border: 1px solid #00c269;
    cursor: pointer;
    margin: 0;
    padding:5px 25px;
    text-decoration:none;
    text-transform:uppercase;
    line-height: 1.1rem;
    box-sizing: border-box;
    vertical-align: middle;
    border-radius: 2px;
    letter-spacing: 0.05em;
        &:hover{
            background:black;
            
        }
    }

`
const StyledLinkList = styled(Link)`
text-decoration: none;
text-decoration-line: none;
color:black;
font-size:15px;
margin:20px;
padding:20px;
    ${AddButton}{
        visibility: hidden;
    }
    ${InfoCart}{
        padding: 0px;
        margin: 0px;
    }
        &:hover{
            color:black;
            ${AddButton}{
                visibility: visible;
            }
        }
`
const NavItem = styled(Link)`
padding: 1rem;
text-decoration: none;
color: #5e5e5e;
margin-left:50px;
margin-right:50px;
text-align:center;
font-size: 17px;
letter-spacing: 1px;
    &:hover{
        color: #5e5e5e;
        border-bottom: solid #000000 5px;
        font-weight: 500;
    }
`

const DecorationLine = styled.div`
width: 100%;
height: 10px;
border-top: solid #000000 1px;
`
const InfoItem = styled.p`
text-align: center;
padding: 10px;
margin: 12px;
font-size:15px;
`
const InfoPayment = styled.div`
margin: 15px;
padding:15px;
font-size:10px;
    ${Info}{
        padding: 0px;
        margin 0px;  
        text-align:start;
    }
    ${StyledLink}{
        font-size:15px;
        color: white;
        background:#00c269;
        border: 1px solid #00c269;
        cursor: pointer;
        margin: 0;
        padding:5px 25px;
        text-decoration:none;
        text-transform:uppercase;
        line-height: 1.1rem;
        box-sizing: border-box;
        vertical-align: middle;
        border-radius: 2px;
        letter-spacing: 0.05em;
                &:hover{
                    background:black;
                    
                }
        }

`
const DataPayment = styled.div`
${InfoItem}{
text-align: start;
padding: 2px;
border: 1px solid black;
font-size:11px;
margin:10px;
}
`
const InfoItemName = styled.div`
text-align: center;
padding: 10px;
margin: 15px;
font-size:17px;
font-weight: 600;
    ${ListLi}{
        border-right: solid #000000 0px;   
    }
`

const ImgList = styled.img`
height:700px;
width :450px;
`
const InfoMesage = styled.div`
text-align: center;
padding: 10px;
margin: 15px;
font-size:17px;
font-weight: 600;
background-color:rgb(255, 214, 118);
`

export {
    Button, StyledLink, StyledLinkList, ILContainer, FooterStyle, ButtonFooter, ListUl, ListLi, Info, InfoMesage,
    DecorationLine, NavItem, InfoItem, DataPayment, InfoPayment, InfoItemName, ImgList, InfoCart, ModalInfo, Order,
    AddButton, ImgCart, AddButtonWidget
}