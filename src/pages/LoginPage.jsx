import loginPageImage from '../assets/loginPageImage.png'
export default function LoginPage(){
    return (
        <div>
            <div className="cotainer-fluid">
                <div className="row d-flex align-items-center justify-content-center" style={{width:"99%"}}>
                    <div className="col-md-6 pt-5 pb-5 col-sm-6 col-xs-12 d-flex align-items-center justify-content-start pe-0">
                        <img className='border-0' src={loginPageImage} style={{height:'50%',width:'70%'}} alt="Login" />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 d-flex justify-content-start align-items-center p-0">
                        <div className="" style={{width:'70%'}}>
                            <p className='fs-3 fw-bold'>Login To Exclusive</p>
                            <p className='fs-6 fw-lighter'>Enter Your Details bellow</p>
                            <input type="text" placeholder='Email/phone Number' className='border-0 border-bottom p-1' style = {{width:'100%',outline:'none'}}/><br/>
                            <input type="text" placeholder='password' className='border-0 border-bottom p-1 mt-3' style = {{width:'100%',outline:'none'}}/><br/>
                            <div className='d-flex align-items-center justify-content-between mt-3'>
                                <input type="submit" value="LogIn" className='btn btn-danger ps-5 pe-5'/>
                                <a className='text-danger'>Forget Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}