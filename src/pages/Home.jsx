import React from 'react'
import { useCategoryFetch } from '../hooks/useCategoryFetch'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CartBtn from '../components/commons/CartBtn';
import { Vortex } from 'react-loader-spinner';

const Home = () => {
  const { categoryItems, loading, isError } = useCategoryFetch(); // custom hooks ...
  if (isError) {
    return (<>
      <div className="container" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-12 text-center">
            {
              isError
            }
          </div>
        </div>
      </div>
    </>)
  }
  if (loading) {
    return (<>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="row">
          <div className="col-md-12 text-center">
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
      </div>
    </>)
  }
  return (
    <>
      <CartBtn />
      <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className="row">
          {
            categoryItems && categoryItems?.map(item => (
              <div className="col" key={item?.id}>
                <Link className='text-decoration-none' to={`/category/${item?.id}`}>
                  <Card className='mt-3 ms-2' style={{ width: '20rem', height: '150px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <Card.Body>
                      <Card.Title>{item?.name}</Card.Title>
                      <Card.Text>
                        {
                          item?.description
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home