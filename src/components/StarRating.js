import { useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const StarRating = ({ rating, color = "yellow", size = "1em" }) => {
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex flex-row">
      {[...Array(fullStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className={clsx(`text-${color}-500`, size)}
        />
      ))}
      {halfStar && (
        <FontAwesomeIcon
          icon={faStar}
          className={clsx(`text-${color}-300`, size)}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className={clsx(`text-gray-300`, size)}
        />
      ))}
    </div>
  );
};

export default StarRating;
