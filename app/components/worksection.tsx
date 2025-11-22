"use client";

export default function WorkSection() {
  return (
    <div className="container mt-5">

      {/* Judul */}
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h2>What We Work</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, officiis?</p>
        </div>
      </div>

      {/* Card Section */}
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/images/image-44.jpg" className="card-img-top" alt="image" />

            <div className="card-body">
              <h5 className="card-title">Rice with wild boar liver</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/images/image-45.jpg" className="card-img-top" alt="image" />

            <div className="card-body">
              <h5 className="card-title">Another Food Example</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sunt veritatis voluptas explicabo sapiente.
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
