import ProductCarousel from "../components/ProductCarousel"
import ButtonCarousel from "../components/ButtonCarousel"
import Features from "../components/Features"
import Poster from "../components/Poster"
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
        <> 
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
        </>
    )
}