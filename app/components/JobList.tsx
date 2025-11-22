"use client";
import { useState } from "react";
import JobCard from "./JobCard";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  image: string;
}

export default function JobList() {
  const jobs: Job[] = [
    {
      id: 1,
      title: "Astronout",
      location: "Jakarta Pusat",
      type: "Full Time",
      salary: "Rp 200.000.000 - Rp 500.000.000",
      description: "We are looking for an experienced Astronout that can go to the moon with us",
      image: "/images/image-4.jpeg"
    },
    {
      id: 2,
      title: "Pengantar Pizza",
      location: "Jakarta Selatan",
      type: "Full Time",
      salary: "Rp 10.000.000 - Rp 15.000.000",
      description: "Mengantar Pizza Untuk Daerah Jabodetabek tapi motor sendiri ya.",
      image: "/images/image-3.jpeg"
    },
    {
      id: 3,
      title: "Doctor",
      location: "Jakarta Barat",
      type: "Contract",
      salary: "Rp 29.000.000 - Rp 70.000.000",
      description: "Looking for talented Doctor who can fix all kind of disease in the world .",
      image: "/images/image-5.jpeg"
    },
    {
      id: 4,
      title: "Polisi",
      location: "Jakarta Timur",
      type: "Full Time",
      salary: "Rp 9.000.000 - Rp 14.000.000",
      description: "Join Tim Kepolisian kami di Jakarta Timur.",
      image: "/images/images-2.jpeg"
    },
    {
      id: 5,
      title: "Perawat",
      location: "Jakarta Utara",
      type: "Part Time",
      salary: "Rp 5.000.000 - Rp 8.000.000",
      description: "Menjadi Perawat di rumah sakit siloam.",
      image: "/images/image-1.jpeg"
    },
    {
      id: 6,
      title: "Pengendali Market Dunia",
      location: "Jakarta Pusat",
      type: "Full Time",
      salary: "Rp 100.000.000 - Rp 10.000.000.000",
      description: "Berpengalaman menjadi pemimpin dunia dan siang mengguncangkan semua market yang ada di dunia.",
      image: "/images/marketmaker.jpg"
    }
  ];

  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" 
    ? jobs 
    : jobs.filter(job => job.type === filter);

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h2 className="display-5 fw-bold mb-4">Available Positions</h2>
          <div className="btn-group" role="group">
            <button 
              className={`btn ${filter === "All" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter("All")}
            >
              All Jobs
            </button>
            <button 
              className={`btn ${filter === "Full Time" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter("Full Time")}
            >
              Full Time
            </button>
            <button 
              className={`btn ${filter === "Part Time" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter("Part Time")}
            >
              Part Time
            </button>
            <button 
              className={`btn ${filter === "Contract" ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => setFilter("Contract")}
            >
              Contract
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredJobs.map(job => (
          <div key={job.id} className="col-md-6 col-lg-4">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </div>
  );
}