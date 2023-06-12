import { Link } from "react-router-dom"
import { Breadcrumb } from "react-bootstrap"
import {useState} from "react"
export default function NotFoundPage(){
    const [quantity,setQuantity]  = useState(2);
    const showSizeButtons = ()=>{
        return(
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <div className="p-1">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                    <label className="btn btn-outline-danger fw-bolder" for="btnradio1" style={{fontSize:"12px",color:"black"}}>S</label>
                </div>
                <div className="p-1">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                    <label className="btn btn-outline-danger fw-bolder" for="btnradio2" style={{fontSize:"12px",color:"black"}}>M</label>
                </div>
                <div className="p-1">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                    <label className="btn btn-outline-danger fw-bolder" for="btnradio3" style={{fontSize:"12px",color:"black"}}>L</label>
                </div>
                <div className="p-1">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                    <label className="btn btn-outline-danger fw-bolder" for="btnradio4" style={{fontSize:"12px",color:"black"}}>XL</label>
                </div>
                <div className="p-1">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autocomplete="off"/>
                    <label className="btn btn-outline-danger fw-bolder" for="btnradio5" style={{fontSize:"12px",color:"black"}}>XXL</label>
                </div>
            </div>
        )
    }
    const showQuantityButtons = ()=>{
        return(
            <div className="btn-group" style={{width:"35%"}} role="group" aria-label="Default button group">
                <button type="button" className="btn btn-outline-danger fw-bolder" onClick={e=>setQuantity(quantity + 1)}>+</button>
                <input type="text"  className="text-center" style = {{width:"50%"}} onChange = {e=>setQuantity(e.target.value)} value = {quantity} name="" id="" />
                <button type="button" className="btn btn-outline-danger fw-bolder" onClick={e=>setQuantity(quantity - 1)}>-</button>
            </div>
        )
    }
    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                        Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    404 Error
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="m-2" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <p style = {{fontSize:"100px"}}>404 Not Found</p>
                <p className="fw-bolder mt-2 mb-2" >Your Visited Page Not Found. You may go home page.</p>
                <Link to = "/" className="btn btn-danger m-5 ps-5 pe-5 pt-2 pb-2" style={{fontWeight:"50px"}}>Go To Home Page</Link>
            </div>
            <div className="temp" style = {{border:"2px solid black", width:"70%",height:"30%"}}>
                <div>
                    Color:
                </div>
                <div className="d-flex align-items-center">
                    <p className="pe-2">
                        Size:
                    </p>
                    {showSizeButtons()}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    {showQuantityButtons()}
                    <button className="btn btn-danger ps-5 pe-5 pt-2 pb-2 fw-bolder" style = {{fontSize:"10px"}}>Buy Now</button>
                        <svg style = {{width:"50px",height:"50px"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                </div>
            </div>
        </div>
    )
}