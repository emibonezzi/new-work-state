import Vacancy from "@/types/vacancy";
import React from "react";

interface Props {
  vacancy: Vacancy;
}

const JobCard = ({ vacancy }: Props) => {
  return (
    <article className="border border-[rgb(11_93_102)] rounded-lg p-4">
      <span>{vacancy.city}</span>
      <span>{vacancy.date_posted}</span>
      <h2>{vacancy.title}</h2>
      <p>{vacancy.duties_description.slice(0, 100)}...</p>
    </article>
  );
};

export default JobCard;
