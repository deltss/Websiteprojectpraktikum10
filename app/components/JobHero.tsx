"use client";

export default function JobHero() {
  return (
    <div 
      className="position-relative"
      style={{
        backgroundImage: "url('/images/image-44.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}></div>
      <div className="container position-relative text-center text-white">
        <h1 className="display-3 fw-bold mb-3">Join Our Team</h1>
        <p className="lead fs-4">Find your dream career opportunity with us</p>
      </div>
    </div>
  );
}