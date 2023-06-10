import ProductCarousel from "../components/ProductCarousel"
import ButtonCarousel from "../components/ButtonCarousel"
import Features from "../components/Features"
import Poster from "../components/Poster"
import Dropdown from 'react-bootstrap/Dropdown';
import Carousel from 'react-bootstrap/Carousel';
export default function HomePage(){

    const setTitle = (title,name)=>{
        return(
            <div>
                <div className="d-flex m-3 align-items-center">
                    <div style = {{width:"20px",height:"50px",backgroundColor:"red",borderRadius:"5px"}}></div>
                    <p className="ms-3 text-danger fw-bold">{title}</p>
                </div>
                <p className="ms-3 h3 fw-bold">{name}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="d-flex flex-row">
                <div className='mt-5 ml-5'>
                    <ul className="px-5 border-right" style={{width:"100%"}}>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true}>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Women's Fashion
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Hindi</Dropdown.Item>
                                    <Dropdown.Item>Gujarati</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    Men's Fashion
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Hindi</Dropdown.Item>
                                    <Dropdown.Item>Gujarati</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown drop = 'end' autoClose = {true} className=''>
                                <Dropdown.Toggle variant="white" id="dropdown-basic">
                                    kids's Fashion
                                </Dropdown.Toggle>
                                <Dropdown.Menu variant = 'dark'>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Hindi</Dropdown.Item>
                                    <Dropdown.Item>Gujarati</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li><a href="#home">Electronics</a></li>
                        <li><a href="#news">Home & Lifestyle</a></li>
                        <li><a href="#contact">Medicine</a></li>
                        <li><a href="#about">Baby's & Toys</a></li>
                        <li><a href="#about">Groceries</a></li>
                        <li><a href="#about">Baby's & Toys</a></li>
                        <li><a href="#about">Health & Beauty</a></li>
                        <li><a href="#about">Sports</a></li>
                    </ul>
                </div>
                <div className='m-5'>
                <Carousel className='me-5 px-5'>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/09/14073840/ms-dhoni-1625654692.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/09/14073840/ms-dhoni-1625654692.jpg"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2021/09/14073840/ms-dhoni-1625654692.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            
            {setTitle("Today's","FLash Sales")}
            <ProductCarousel category = "Today's Sale"/>

            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>Vew All Products</p>
            </p>

            <p className="border-bottom mt-5 mb-5"></p>
            {setTitle("Category","Browse By Category")}
            <ButtonCarousel/>
            <p className="border-bottom mt-5 mb-5"></p>
            {setTitle("This Month","Best Selling Products")}
            <ProductCarousel category = "Best Selling Products"/>
            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>Vew All Products</p>
            </p>
            <p className="border-bottom mt-5 mb-5"></p>

            {setTitle("Our Products","Explore Our Products")}
            <ProductCarousel category = "Our Products"/>
            <p className="mt-5" style={{display:"flex",justifyContent:"center"}}>
                <p className="btn btn-danger ps-5 pe-5" style={{textAlign:"center"}}>Vew All Products</p>
            </p>
            <p className="border-bottom mt-5 mb-5"></p>

            {setTitle("Featured","New Arrival")}
            <Poster/>
            <p className="border-bottom mt-5 mb-5"></p>
            <Features/>
        </div>
    )
}