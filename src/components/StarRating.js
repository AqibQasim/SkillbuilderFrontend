import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
        <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-500" />
            ))}
            {halfStar && <FontAwesomeIcon icon={faStar} className="text-yellow-300" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FontAwesomeIcon key={`empty-${i}`} icon={faStar} className="text-gray-300" />
            ))}
        </div>
    );
};

export default StarRating;