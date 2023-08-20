import { ReactComponent as Stars } from "@assets/svg/starsTestimonial.svg";

export const starsRating = (rating) => {
  let starsRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsRating.push(<Stars key={i} className="rating-stars" />);
    } else {
      starsRating.push(
        <Stars key={i} className="rating-stars rating-stars--none " />
      );
    }
  }
  return starsRating;
};
