// src/layouts/MenuCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../layouts/Button";

const MenuCard = ({ img, title, targetPath }) => {
  const navigate = useNavigate();

  const handleEnrollNowClick = () => {
    // Navigate to the specific page based on the targetPath prop
    navigate(targetPath);
  };

  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <div>
        <img className="rounded-xl" src={img} alt={title} />
      </div>
      <div className="p-2 mt-5">
        <div className="flex flex-row justify-between">
          <h3 className="font-semibold text-xl">{title}</h3>
        </div>
        <div className="flex flex-row justify-between mt-3">
          <div className="button-container">
            <Button title="Enroll Now" onClick={handleEnrollNowClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
