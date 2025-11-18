import React from "react";

const Reviews = () => {
  const reviews = [
    { product: "Wireless Mouse", rating: 4, comment: "Very good quality!" },
    { product: "Office Chair", rating: 5, comment: "Comfortable & stylish!" },
  ];

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">Your Reviews</h1>

      {reviews.map((rev, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold">{rev.product}</h2>
          <p className="text-yellow-500">⭐ {rev.rating}/5</p>
          <p className="text-gray-600">{rev.comment}</p>
        </div>
      ))}

    </div>
  );
};

export default Reviews;
