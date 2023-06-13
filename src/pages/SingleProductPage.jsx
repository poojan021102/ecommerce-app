import { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Product from '../components/Product';

export default function SingleProductPage(){
    const [quantity,setQuantity]  = useState(2);
    const [stock,setStock] = useState(true);

    let a = [{imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
]

    const setTitle = (title)=>{
        return(
                <div className="d-flex m-3 align-items-center">
                    <div style = {{width:"20px",height:"50px",backgroundColor:"red",borderRadius:"5px"}}></div>
                    <p className="ms-3" style={{fontSize:"20px"}}>{title}</p>
                </div>
        )
    }
    const showProducts = (a)=>{
        return(
            <div className="container-fluid">
                <div className="row">
                    {
                        a.map((item,index)=>{
                            return(
                                    <div key = {index} className="col d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Product imageLink={item.imageLink} title = {item.title} price = {item.price} ratings={3}/>
                                    </div>
                                )
                            })
                    }
                </div>
            </div> 
        )
    }

    const showRatings = (ratings)=>{
        let a = [];
        for(let i = 0;i<ratings;++i){
            a.push("checked")
        }
        while(a.length != 5){
            a.push("unchecked")
        }
        return(
            a.map((status,index)=>{
                console.log(status);
                return(
                status=="checked"?(<span key = {index} className="fa fa-star" style={{color:"yellow",fontSize:"20px"}} ></span>):(<span key = {index} className="fa fa-star" style={{color:"gray",fontSize:"20px"}} ></span>)
                )
            })
        )
    }

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
    return (
        <div className="d-flex flex-column mb-5">
            <div className='mt-3 mx-5 px-5'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Gaming</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='mx-5 px-5 d-flex flex-row'>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-column'>
                        <div className='smallImgCont'>
                            <img className='smallImg' src="https://m.media-amazon.com/images/I/71se60rnXTL.jpg" alt="" />
                        </div>
                        <div className='smallImgCont'>
                            <img className='smallImg' src="https://m.media-amazon.com/images/I/71se60rnXTL.jpg" alt="" />
                        </div>
                        <div className='smallImgCont'>
                            <img className='smallImg' src="https://m.media-amazon.com/images/I/71se60rnXTL.jpg" alt="" />
                        </div>
                        <div className='smallImgCont'>
                            <img className='smallImg' src="https://m.media-amazon.com/images/I/71se60rnXTL.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mainImgCont'>
                        <img className='mainImg' src="https://static.fnac-static.com/multimedia/Images/FR/MDM/d6/dd/f6/16178646/1505-1/tsp20230110223611/Joystick-Jet-Alpha-Omega-Players-Noir.jpg" alt="" />
                    </div>
                </div>
                <div className='d-flex flex-column ml-5 pl-5'>
                    <div className='pro-title mb-2'>
                        Name
                    </div>

                    <div className='d-flex flex-row my-1'>
                        <div>{showRatings(3)}</div>
                        <small className='ms-2 text-muted'>(150 Reviews) |</small>
                        <div className='ms-2'>
                            {
                                stock && (<p className='text-success'>In Stock</p>)
                            }
                            {
                                !stock && (<p className='text-danger'>Out of Stock</p>)
                            }
                        </div>
                    </div>
                    
                    <div className='pro-price mb-1'>
                        Rs3000
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem perferendis a nihil praesentium ratione! Numquam dolorum iusto quas vitae nihil, illum eligendi delectus ipsum optio.</p>
                    <hr />

                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row align-items-center'>
                            <p className='mr-3 pt-1'>Colours:</p>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bg-warning" type="radio" name="inlineRadioOptions" value="option1"/>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bg-success" type="radio" name="inlineRadioOptions" value="option2"/>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <p className="mr-3 pt-1">Size:</p>
                            {showSizeButtons()}
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            {showQuantityButtons()}
                            <button className="btn btn-danger ps-5 pe-5 py-2 fw-bolder" style = {{fontSize:"15px"}}>Buy Now</button>
                            <div className='mb-4 pb-2 mr-5'>
                                <input type="checkbox" className='heart'/>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex flex-row bg-light border border-dark align-items-center mt-4'>
                        <div className='pro-icon m-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                            </svg>
                        </div>
                        <div className='ml-5 pt-2'>
                            Free Delivery <br />
                            <a href='#'>Enter your Postal code for Delivery Availability</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row bg-light border border-dark align-items-center mt-1 mb-1'>
                        <div className='pro-icon m-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                        <div className='ml-5 pt-2'>
                            Return Delivery
                            <p>Free 30 day delivery return <a href="#">details</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {setTitle("Related Items")}
            </div>
            {showProducts(a)}
        </div>
    );
}