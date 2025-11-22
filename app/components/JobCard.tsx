"use client";
import { useState } from "react";
import JobModal from "./JobModal";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  image: string;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="card h-100 shadow-sm">
        {!imageError ? (
          <img 
            src={job.image} 
            className="card-img-top" 
            alt={job.title}
            style={{ height: "200px", objectFit: "cover" }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div 
            className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
            style={{ height: "200px" }}
          >
            <i className="bi bi-briefcase" style={{ fontSize: "3rem" }}></i>
          </div>
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{job.title}</h5>
          <p className="text-muted mb-2">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {job.location}
          </p>
          <div className="mb-3">
            <span className="badge bg-primary me-2">{job.type}</span>
            <span className="badge bg-success">{job.salary}</span>
          </div>
          <p className="card-text flex-grow-1">{job.description}</p>
          <button 
            className="btn btn-primary w-100 mt-auto"
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </button>
        </div>
      </div>

      <JobModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        job={job}
      />
    </>
  );
}