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
      title: "Senior Web Developer",
      location: "Jakarta Pusat",
      type: "Full Time",
      salary: "Rp 12.000.000 - Rp 18.000.000",
      description: "We are looking for an experienced web developer to join our dynamic team. Must have 3+ years experience in React and Node.js.",
      image: "/images/image-45.png"
    },
    {
      id: 2,
      title: "Marketing Manager",
      location: "Jakarta Selatan",
      type: "Full Time",
      salary: "Rp 10.000.000 - Rp 15.000.000",
      description: "Seeking a creative marketing manager to develop and execute marketing strategies. Experience in digital marketing required.",
      image: "/images/image-46.png"
    },
    {
      id: 3,
      title: "Graphic Designer",
      location: "Jakarta Barat",
      type: "Contract",
      salary: "Rp 7.000.000 - Rp 10.000.000",
      description: "Looking for talented graphic designer proficient in Adobe Creative Suite. Portfolio required.",
      image: "/images/image-47.png"
    },
    {
      id: 4,
      title: "Data Analyst",
      location: "Jakarta Timur",
      type: "Full Time",
      salary: "Rp 9.000.000 - Rp 14.000.000",
      description: "Join our data team to analyze business metrics and provide insights. SQL and Python skills required.",
      image: "/images/image-48.png"
    },
    {
      id: 5,
      title: "Content Writer",
      location: "Jakarta Utara",
      type: "Part Time",
      salary: "Rp 5.000.000 - Rp 8.000.000",
      description: "Creative writer needed to produce engaging content for our digital platforms. SEO knowledge is a plus.",
      image: "/images/image-49.png"
    },
    {
      id: 6,
      title: "Project Manager",
      location: "Jakarta Pusat",
      type: "Full Time",
      salary: "Rp 15.000.000 - Rp 22.000.000",
      description: "Experienced PM to lead cross-functional teams and deliver projects on time. PMP certification preferred.",
      image: "/images/image-44.jpg"
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