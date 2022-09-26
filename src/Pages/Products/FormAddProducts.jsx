import React from 'react'

const FormAddProducts = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Name Product</label>
                <input type="name" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Price</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default FormAddProducts