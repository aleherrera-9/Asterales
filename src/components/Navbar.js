const Navbar = () => {
    return (
        <div className="navBackground">
            <ul className="nav justify-content-center ">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" >Seguros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">Siniestros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="#">Atencion al cliente</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Institucional</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disable" href="#">Contacto</a>
                </li>
            </ul>
        </div>
        
    );
}
export default Navbar;