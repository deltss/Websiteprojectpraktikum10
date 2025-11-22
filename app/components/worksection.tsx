"use client";

export default function WorkSection() {
  return (
    <div className="container mt-5">

      {/* Judul */}
      <div className="row mb-3">
        <div className="col-12 text-center">
          <h2>KLIK JOBS DI KANAN ATAS UNTUK SELENGKAPNYA</h2>
        </div>
      </div>

      {/* Card Section */}
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-3">
          <div className="card">
            <img src="/images/image-44.jpg" className="card-img-top" alt="image" />

            <div className="card-body">
              <h5 className="card-title">Gaji Tinggi</h5>
              <p className="card-text">
                Berbagai Pekerjaan menarik dengan gaji tinggi.
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
              <h5 className="card-title">Lingkungan Kerja menyenangkan</h5>
              <p className="card-text">
                Lingkungan kerja yang baik dapat membuat anda berkembang dan terhindar dari stress
              </p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
