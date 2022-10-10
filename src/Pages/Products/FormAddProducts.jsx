import React from 'react'
import PageLayout from '../../PageLayout'

const FormAddProducts = () => {
    return (
        <PageLayout>
        <form>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Name</label>
                <input type="name" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Image</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Price</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Shade</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Description</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Shopee</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <div className="mb-3">
                <label htmlFor="-" className="form-label">Tokopedia</label>
                <input type="price" className="form-control" id="-" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </PageLayout>
    )
}

export default FormAddProducts