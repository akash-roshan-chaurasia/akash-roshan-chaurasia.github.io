import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  className?: string;
}

export function StarRating({ rating, className = "" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 fill-primary text-primary" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 text-primary" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted" />
      ))}
    </div>
  );
}