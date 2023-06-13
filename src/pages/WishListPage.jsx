import Product from "../components/Product"
export default function WishListPage(){
    let a = [{imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"},
    {imageLink:"https://th.bing.com/th/id/R.cc3b1567038ac9c1461b9937b15739df?rik=L3Xlg%2fAJRkcq4g&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2019%2f02%2f11%2fbeautiful-nature-Best-Scenery-Wallpapers.jpg&ehk=acp4ccuFepzaZeQ2NZpIUdIF%2fjGi3Iur94JhC5BR8pM%3d&risl=&pid=ImgRaw&r=0",title:"Product Title",price:"100"}
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
    return (
        <>
            <div className="m-3">
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>WishList(4)</p>
                    <p className="btn btn-outline-secondary">Move All Item to bag</p>
                </div>
                {showProducts(a)}
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    {setTitle("Just For You")}
                    <p className="btn btn-outline-secondary" style = {{display:"flex",alignItems:"center"}}>Move All Item to bag</p>
                </div>
                {showProducts(a)}
            </div>
        </>
    )
}