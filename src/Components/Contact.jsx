
export const ContactSection = () => {
  return (
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </section>
  )
}