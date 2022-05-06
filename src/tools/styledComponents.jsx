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

const ButtonMin = styled.button`
background-color: #00c269;
border: 1px solid #00c269;
text-transform: uppercase;
font-size: 14px;
color: white;
padding: 10px;
margin: 5px;
&:hover{
    border-color:  black;
    color: white;
    background-color: black;
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
const StyledLinkList = styled(Link)`
text-decoration: none;
text-decoration-line: none;
color:black;
font-weight: 600;
&:hover{
    color:#00c269;
}
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
const Nav = styled.div`
display: flex;
list-style: none;
justify-content:space-between
padding: 0;
margin: 0;
`
const NavItem = styled(Link)`
display: block;
padding: 1rem;
font-weight: 600;
font-size:20px;
text-decoration: none;
color: black;
flex-grow:1;
text-align:center;
&:hover{
    color:#00c269;
}
`
const DecorationLine = styled.div`
width: 100%;
height: 10px;
border-top: solid #000000 2px;
`
const InfoItem = styled.p`
text-align: center;
padding: 10px;
margin: 15px;
font-size:15px;
`
const InfoItemName=styled.p`
text-align: center;
padding: 10px;
margin: 15px;
font-size:20px;
font-weight: 600;
`
const Wrapper=styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
}
`
const WrapperItem=styled.div`
    grid-column: 1;
    grid-row: 2 / 5;
  
`
const ImgList=styled.img`
height:750px;
width :500px;
`

export {Button, ButtonMin, StyledLink, StyledLinkList, ILContainer, FooterStyle, ButtonFooter, ListUl, ListLi, Info, 
        DecorationLine, NavItem,Nav,InfoItem,InfoItemName,Wrapper,WrapperItem,ImgList }