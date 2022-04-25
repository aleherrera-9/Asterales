import {BsGoogle} from 'react-icons/bs'
const Register = () =>{
    const handleEvent = (e) =>{
        if(e.keyCode===65||e.keyCode===69 ||e.keyCode===73 ||e.keyCode===79 ||e.keyCode===85) e.preventDefault();
        console.log(e.keyCode)
    }
    return(

            <div className="container ">
                 <div className="row Register">
                    <div className="col p-5 text-center">
                    <h3 className='fs-5 '>ingresar a asterales</h3>
                    <form>
                            <div className="mb-3">
                                <label  className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onKeyDown={handleEvent}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                                <a href="">¿Olvidaste tu contraseña?</a>
                            </div>
                    </form>
                    <div>
                       <button type="login" ><p>ingresar</p></button>
                       <button type="loginWithGoogle" ><p><BsGoogle/> ingresar con google</p></button>
                       </div>
                    </div>
                    <div className="col p-5 text-center">
                    <h3 className='fs-5'>registrarse</h3>
                        <p className='m-4'>Una cuenta en la tienda online agiliza tus compras y te pone al día con tendencias y promociones.</p>
                        <br/>
                       <div>
                       <button type="login" ><p>crear cuenta</p></button>
                       <button type="loginWithGoogle" ><p><BsGoogle/> ingresar con google</p></button>
                       </div>
                   
                    </div>
                </div>
            </div>
    );
}
export default Register;