import React from "react";

function ProfileCard({ name, role, description, img }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
      <img
        src={img}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="text-xl font-bold mt-4 text-gray-800">{name}</h2>
      <p className="text-blue-600 font-medium">{role}</p>
      <p className="text-gray-600 mt-3">{description}</p>
    </div>
  );
}

export default ProfileCard;
