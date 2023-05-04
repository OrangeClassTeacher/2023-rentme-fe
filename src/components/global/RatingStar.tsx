import { FC } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface RatingStarProps {
  count?: number;
  rating?: number;
  gap?: number;
  size?: number;
}

const RatingStar: FC<RatingStarProps> = ({ rating = 0, count = 5, gap = 10, size = 14 }) => (
  <div className={`flex justify-center`} style={{ gap: gap }}>
    {Array.from(Array(Math.round(rating)), (value, index) => (
      <AiFillStar size={size} key={`rating-star-${index}`} color="#422006" />
    ))}
    {Array.from(Array(count - Math.round(rating)), (value, index) => (
      <AiOutlineStar size={size} key={`rating-star-empty-${index}`} color="#422006" />
    ))}
  </div>
);

export default RatingStar;