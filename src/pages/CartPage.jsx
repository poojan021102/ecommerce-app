import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function CartPage(){
    return (
        <div className='d-flex flex-column'>
            <div className='mt-3 mx-5 px-5'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='bg-white mx-5 shadow'>
                <div className='my-3 mx-5 px-5 d-flex flex-row text-dark'>
                    <b className='pname'>Product</b>
                    <b className='price'>Price</b>
                    <b className='num'>Quantity</b>
                    <b className='tot'>Subtotal</b>
                    <b className='remove'>Remove</b>
                </div>
            </div>
            <div className='bg-white mx-5 my-3 shadow'>
                <div className='my-3 mx-5 px-5 d-flex align-items-center justify-content-between text-dark'>
                    <div>
                        <img className='Imgsz' src="https://www.clipartmax.com/png/middle/176-1766224_instagram-logos-in-vector-format-free-download-instagram-logo-small-size.png" alt="" />
                        abcdefghijklmnopqrst
                    </div>
                    <div>
                        Rs 200
                    </div>
                    <div>
                        <input className='ms-5 w-25' type="number" />
                    </div>
                    <div>
                        Rs 200
                    </div>
                    <div style={{height: "20px",width: "20px"}} className='mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='mx-5 my-3 d-flex flex-row justify-content-between'>
                <button className='p-3 px-5 border border-gray text-dark rounded bg-white'>Return to Shop</button>
                <button className='p-3 px-5 border border-gray text-dark rounded bg-white'>Update Cart</button>
            </div>
            <div className='mx-5 my-3 d-flex flex-row justify-content-between'>
                <form class="form-inline">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Coupon Code"/>
                    </div>
                    <button type="submit" class="btn btn-danger mx-1">Apply Coupon</button>
                </form>
                <form class="form-inline border border-dark p-4 rounded d-flex flex-column">
                    <div class="form-group my-2">
                        <label className='mr-5'>Sub Total:</label>
                        <input type="text" class="form-control border border-dark bg-white" disabled/>
                    </div>
                    <div class="form-group my-2">
                        <label className='mr-5'>Shipping:</label>
                        <input type="text" class="form-control border border-dark bg-white" disabled/>
                    </div>
                    <div class="form-group my-2">
                        <label className='mr-4 pl-1'>Total:</label>
                        <input type="text" class="form-control border border-dark bg-white ml-5" disabled/>
                    </div>
                    <button type="submit" class="btn btn-danger mt-4">Proceed to Checkout</button>
                </form>
            </div>
        </div>
    );
}