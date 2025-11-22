"use client";

export default function ServiceSection() {
    return (
        <div className="container my-5">
            <div className="row">

                <div className="col-md-4 mb-3 text-center py-3">
                    <img
                        src="/images/about-icon1.png"
                        alt="Service 1"
                        className="img-fluid"
                    />
                    <h3>Service 1</h3>
                    <p>Description of Service 1.</p>
                </div>

                <div className="col-md-4 mb-3 text-center py-3">
                    <img
                        src="/images/about-icon2.png"
                        alt="Service 2"
                        className="img-fluid"
                    />
                    <h3>Service 2</h3>
                    <p>Description of Service 2.</p>
                </div>

                <div className="col-md-4 mb-3 text-center py-3">
                    <img
                        src="/images/about-icon3.png"
                        alt="Service 3"
                        className="img-fluid"
                    />
                    <h3>Service 3</h3>
                    <p>Description of Service 3.</p>
                </div>

            </div>
        </div>
    );
}
