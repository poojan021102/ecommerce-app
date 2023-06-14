export default function Product({imageLink,title,ratings,price}){
    const showRatings = ()=>{
        let a = [];
        for(let i = 0;i<ratings;++i){
            a.push("checked")
        }
        while(a.length != 5)a.push("unchecked")
        return(
            a.map((status,index)=>{
                return(
                status=="checked"?(<span key = {index} className="fa fa-star" style={{color:"yellow","fontSize":"20px"}} ></span>):(<span key = {index} className="fa fa-star" style={{color:"gray","fontSize":"20px"}} ></span>)
                )
            })
        )
    }
    return(
        <>
            <div className="card" style={{width: "270px"}}>
            <img src={imageLink} style={{height:"170px"}} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{title}</p>
                <p className = "card-text text-danger">Rs {price}</p>
                {ratings && <p className="card-text">{showRatings()}</p>}
                <p className="text-center">
                    <p className="btn btn-outline-secondary" style={{fontSize:"10px",width:'100%'}}>Add To Cart</p>
                </p>
            </div>
            </div>
        </>
    )
}