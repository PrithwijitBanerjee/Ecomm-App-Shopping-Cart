import React, { memo } from 'react'

const SidebarCategory = ({ handleFilter, filterOptions }) => {
    return (
        <>
            <div className="col-sm-12 col-md-4 border-end border-1 border-secondary" style={{ height: '100vh' }}>
                <h2 className='mt-5 ms-5'>Filter</h2>
                <div className="container mt-5 ms-5">
                    <div className="row ms-5">
                        <div className="col-12 mt-5">
                            <label htmlFor="delivery">
                                <input
                                    className="form-check-input me-3 fs-4"
                                    value={'delivery'}
                                    checked={filterOptions?.delivery}
                                    type="checkbox"
                                    id='delivery'
                                    onChange={handleFilter}
                                />
                                <span className='fs-4'>Delivery</span>
                            </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="expensive">
                                <input
                                    className="form-check-input me-3 fs-4"
                                    type="checkbox"
                                    value="expensive"
                                    id='expensive'
                                    checked={filterOptions?.expensive}
                                    onChange={handleFilter}
                                />
                                <span className='fs-4'>Expensive</span>
                            </label>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="best-selling">
                                <input
                                    className="form-check-input me-3 fs-4"
                                    type="checkbox"
                                    value="bestSelling"
                                    id='bestSelling'
                                    checked={filterOptions?.bestSelling}
                                    onChange={handleFilter}
                                />
                                <span className='fs-4'>Best Selling</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(SidebarCategory);