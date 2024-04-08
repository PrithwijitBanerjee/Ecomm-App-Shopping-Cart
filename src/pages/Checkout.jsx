import CartBtn from '../components/commons/CartBtn'
import { useCheckoutProducts } from '../hooks/useCheckoutProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {toast} from 'react-toastify';
const Checkout = () => {
  const { dispatch, checkoutItems } = useCheckoutProducts(); // custom hooks ...
  const handleBtnIncrement = item => {
    dispatch({
      type: 'INCREMENT_CART', payload: {
        id: item?.id,
        name: item?.name,
        price: item?.price,
        img_url: item?.img_url
      }
    })
  }
  const handleBtnDecrement = item => {
    dispatch({
      type: 'DECREMENT_CART', payload: {
        id: item?.id,
        name: item?.name,
        price: item?.price,
        img_url: item?.img_url
      }
    })
  }
  const handleRemoveProduct = item => {
    dispatch({
      type: 'REMOVE_CART',
      payload: {
        id: item?.id,
        name: item?.name,
        price: item?.price,
        img_url: item?.img_url
      }
    })
    toast.error(`${item?.name} has been removed from cart`,{
      theme: 'colored'
    })
  }
  return (
    <>
      <CartBtn />
      <div className="container">
        <div className="row">
          <div className="col-12 text-start">
            <h2 className='text-secondary'>Checkout</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex mt-5 justify-content-center custom-table">
            <table className="table mt-5 checkout-table" style={{ width: '90%' }}>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  checkoutItems?.length === 0 && (
                    <tr className='text-center'>
                      <td colSpan={5}><h5 className='mt-5 mb-3'>Your Cart is Empty</h5></td>
                    </tr>
                  )
                }
                {
                  checkoutItems && checkoutItems?.map(item => (
                    <tr key={item?.id}>
                      <td><img src={item?.img_url} alt="..." width={100} height={100} /></td>
                      <td>{item?.name}</td>
                      <td>{item?.price}</td>
                      <td>
                        <button className='btn btn-success mx-2' onClick={() => handleBtnIncrement(item)}>+</button>
                        {
                          item?.item_qty
                        }
                        <button className='btn btn-danger mx-2' onClick={() => handleBtnDecrement(item)}>-</button>
                      </td>
                      <td>
                        <button className='btn btn-dark' onClick={() => handleRemoveProduct(item)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout