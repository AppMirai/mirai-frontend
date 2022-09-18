import "./product.css"
import { Sell, Description, Publish } from '@mui/icons-material';
import { NavLink } from "react-router-dom";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Edit Product</h1>
                <NavLink to="/newProduct">
                    <button className="productAddButton">Create</button>
                </NavLink>
            </div>
            <div className="productContainer">
                <div className="productShow">
                    <div className="productShowTop">
                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRShtQfVrCyeCi9qBjosoFJbUueHZxx8u63Dshr8RItQ5mB-gN3uhft4ZtGKIz2kYjxcOC5Y1ZEWdEdCTShZUVjO4n3YOA_dp-kBWqykzE&usqp=CAE" alt="" className="productShowImg"/>
                        <div className="productShowTopTitle">
                            <span className="productShowName">Maybelline Color Sensational Ultimatte Slim Lipstick 488 More Stone - Lipstik Make Up</span>
                        </div>
                    </div>
                    <div className="productShowBottom">
                        <span className="productShowTitle">Product Details</span>
                        <div className="productShowInfo">
                            <Sell className="productShowIcon" />
                            <span className="productShowInfoTitle">Rp 199.900,00</span>
                        </div>
                        <div className="productShowInfo">
                            <Description className="productShowIcon" />
                            <span className="productShowInfoTitle">Maybelline Color Sensational Ultimatte Slim Lipstick 488 More Stone - Lipstik Make Up Slim Matte Lipstick Dari Maybelline Favorite Para Member Itzy, Girlband Asal Korea. Formula Ringan & Nyaman Dengan Hasil Flawlessly Smooth. Be Bold Not Shy Dengan Ultimatte Lipstick X Itzy!</span>
                        </div>
                    </div>
                </div>
                <div className="productUpdate">
                    <span className="productUpdateTitle">Edit</span>
                    <form className="productUpdateForm">
                        <div className="productUpdateLeft">
                            <div className="productUpdateItem">
                                <label>Nama Product</label>
                                <input 
                                    type="text"
                                    placeholder="Maybelline Color Sensational Ultimatte Slim Lipstick 488 More Stone - Lipstik Make Up"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Harga</label>
                                <input 
                                    type="text"
                                    placeholder="Rp 199.900,00"
                                    className="productUpdateInput"
                                />
                            </div>
                            <div className="productUpdateItem">
                                <label>Deskripsi Produk</label>
                                <input 
                                    type="text"
                                    placeholder="Maybelline Color Sensational Ultimatte Slim Lipstick 488 More Stone - Lipstik Make Up Slim Matte Lipstick Dari Maybelline Favorite Para Member Itzy, Girlband Asal Korea. Formula Ringan & Nyaman Dengan Hasil Flawlessly Smooth. Be Bold Not Shy Dengan Ultimatte Lipstick X Itzy!"
                                    className="productUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="productUpdateRight">
                            <div className="productUpdateUpload">
                                    <img 
                                    className="productUpdateImg" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRShtQfVrCyeCi9qBjosoFJbUueHZxx8u63Dshr8RItQ5mB-gN3uhft4ZtGKIz2kYjxcOC5Y1ZEWdEdCTShZUVjO4n3YOA_dp-kBWqykzE&usqp=CAE" alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="productUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="productUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}