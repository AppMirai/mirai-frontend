import "./newProduct.css"

export default function NewProduct() {
    return(
        <div className="newProduct">
            <h2 className="newProductTitle">Tambahkan Produk Baru</h2>
            <form className="newProductForm">
                <div className="newProductItem">
                    <label>Nama Product</label>
                    <input type="text" placeholder="Masukkan nama produk" />
                </div>
                <div className="newProductItem">
                    <label>Harga</label>
                    <input type="text" placeholder="Masukkan harga produk" />
                </div>
                <div className="newProductItem">
                    <label>Deskripsi Produk</label>
                    <input type="text" placeholder="Masukkan deskripsi produk"/>
                </div>
                <div className="newProductItem">
                    <label>Stok Produk</label>
                    <input type="text" placeholder="Masukkan stok produk"/>
                </div>
                <div className="newProductItem">
                    <label>Apakah produk ini dalam kondisi baru?</label>
                    <select className="newProductSelect" name="kondisi" id="kondisi">
                        <option value="yes">Ya</option>
                        <option value="no">Tidak</option>
                    </select>
                </div>
            </form>
        </div>
    )
}