export default function Navbar(){
    return (
        <div className="container-fluid text-center border-bottom" style={{height:"60px"}}>
            <div className="row h-100">
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    Exclusive
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                Home
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                Contact
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                About
                            </div>
                            <div className="col-md-3 col-sm-3 col-xl-3 col-lg-3 col-xxl-3 col-xs-12">
                                SignUP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
                    <div className="input-group d-flex justify-content-center align-items-center">
                            <input className="bg-body-secondary border-0" style ={{outline:'none'}} type="text" placeholder="What You are looking For?" />
                        <div className="input-group-text bg-body-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}