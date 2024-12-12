import "./About.css";
export const AboutSection = () =>{
  return (
    <>
      <section id="about" className="py-5">
        <div className="container text-center position-relative">
          <h2>About Us</h2>
          <div className="row align-items-center mt-4">
            {/* Text Content */}
            <div className="col-12 col-md-6">
              <p>
                We specialize in transforming ordinary jewelry photos into
                extraordinary masterpieces. With years of experience in photo
                editing and a passion for perfection, our team ensures every
                image showcases the true beauty and brilliance of your designs.
              </p>
            </div>

            {/* Image Content */}
            <div className="col-12 col-md-6">
              <img
                src="../public/1-1.png"
                alt="Retouching"
                className="img-fluid about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
