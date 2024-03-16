import React from 'react'

const CardComponent = () => {
    return (
        <>
            <hr className="my-4" />
            <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">Shirt</h6>
                    <h6 className="text-black mb-0">Cotton T-shirt</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus" />
                    </button>
                    <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control form-control-sm" />
                    <button className="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus" />
                    </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0">€ 44.00</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                </div>
            </div>
        </>
    )
}

export default CardComponent