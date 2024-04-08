import React, { useState } from 'react'
import { useProductsFromCategory } from '../hooks/useProductsFromCategory'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import SidebarCategory from '../components/SidebarCategory';
import CartBtn from '../components/commons/CartBtn';
import { useCartContext } from '../context/cart.context';
import { Vortex } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Category = () => {
  const { dispatch } = useCartContext(); // custom hooks ...
  const { id } = useParams();
  const [keywords, setKeywords] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    delivery: false,
    expensive: false,
    bestSelling: false
  });
  const handleFilter = (e) => {
    const { value, checked } = e.target;
    setFilterOptions(prevOptions => ({
      ...prevOptions,
      [value]: checked
    }));
    if (checked) {
      setKeywords(prevKeywords => [...prevKeywords, value]);
    } else {
      setKeywords(prevKeywords => prevKeywords.filter(keyword => keyword !== value));
    }
  }
  const { products, loading, error } = useProductsFromCategory(id, keywords); //custom hooks ...
  if (error) {
    return (<div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-md-12">
          {
            error
          }
        </div>
      </div>
    </div>)
  }
  if (loading) {
    return (<div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-md-12">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        </div>
      </div>
    </div>)
  }
  return (
    <>
      <CartBtn />
      <div className='container-fluid'>
        <div className="row">
          <SidebarCategory
            filterOptions={filterOptions}
            handleFilter={handleFilter}
          />
          <div className="col-sm-12 col-md-8">
            <div className="container h-100 d-flex justify-content-center align-items-center">
              <div className="row">
                {
                  products && products?.map(product => (
                    <div className="col" key={product?.id}>
                      <Card style={{ marginTop: '20px', width: '16rem', borderRadius: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card.Img className='img-fluid' style={{ height: '200px', borderRadius: '20px' }} variant="top" src={product?.thumbnail} alt='not-found' rounded="true" />
                        <Card.Body>
                          <Card.Title>{product?.name}</Card.Title>
                          <Card.Subtitle>{product?.currency === 'USD' ? '$' : 'INR'} {product?.price}</Card.Subtitle>
                          <Card.Text>
                            {
                              product?.inStock ? <span className='text-success'>In stock</span> : <span className='text-danger'>Out of stock</span>
                            }
                          </Card.Text>
                          <div className='text-center'>
                            <Button variant="dark w-75"
                              disabled={!product?.inStock}
                              onClick={() => {
                                dispatch({
                                  type: 'ADD_TO_CART', payload: {
                                    id: product?.id,
                                    name: product?.name,
                                    price: product?.price,
                                    img_url: product?.thumbnail
                                  }
                                })
                                toast.success(`${product?.name} has been added to cart`, {
                                  theme: 'colored'
                                });
                              }}
                            >Add to cart</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
                {
                  products.length === 0 && (<>
                    <div className="col d-flex justify-content-center">
                      <h3>No items found...</h3>
                    </div>
                  </>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category