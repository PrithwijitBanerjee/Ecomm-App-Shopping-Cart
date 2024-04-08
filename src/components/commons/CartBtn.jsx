import { memo } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cart.context';

const CartBtn = () => {
    const {currState} = useCartContext(); // custom hooks ...
    let sumOfPrice = currState?.items?.reduce((sum,acc) => sum + acc?.price,0);
    return (
        <div className="container-fluid mt-3 w-100">
            <div className="row text-end">
                <div className="col-12">
                    <Link to={'/checkout'} className='d-flex justify-content-end text-decoration-none text-black'>
                        <div className='mx-3 shadow p-3 mb-5 bg-body rounded text-center rounded-circle fs-3 pt-1' style={{height:'50px', width: '50px'}}>{currState?.qty}</div>
                        <div className='mx-3 shadow p-3 mb-5 bg-body rounded text-center rounded fs-3 pt-1' style={{height:'50px', width: '150px'}}>$ {sumOfPrice}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(CartBtn);