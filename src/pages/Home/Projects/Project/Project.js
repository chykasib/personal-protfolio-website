import React from "react";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  console.log(project);
  const { picture, name, description, id } = project;
  return (
    <div className="card w-96 rounded-xl bg-gradient-to-r from-black  to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <div className="card-actions justify-start">
          <Link to={`/details/${id}`}>
            <button className="btn text-white block rounded-full bg-primary px-8 py-3 text-sm font-medium hover:bg-transparent">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
