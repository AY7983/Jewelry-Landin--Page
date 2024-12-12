import "./Product.css";
export const ProductSection = () => {
  return (
   <>
      <section id="portfolio" className="py-5">
          <div className="container">
            <h2 className="text-center">Retouching Portfolio</h2>
            <div className="row mt-4">
             
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/after2.png"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/4.jpg"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/6.jpeg"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/2.jpg"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/3.jpg"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
             
              <div className="col-md-4">
                <div className="product">
                  <img
                    src="../public/5.jpg"
                    alt="Product 2"
                    className="img-fluid rounded"
                  />
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="product transparent">
                  <img
                    src="../public/bracelet.png"
                    alt="Product 1"
                    className="img-fluid rounded gold"
                  />
                </div>
              </div>
            
              <div className="col-md-4">
                <div className="product transparent">
                  <img
                    src="../public/earring-1.png"
                    alt="Product 1"
                    className="img-fluid rounded gold"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="product transparent">
                  <img
                    src="../public/ring.png"
                    alt="Product 1"
                    className="img-fluid rounded gold"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}