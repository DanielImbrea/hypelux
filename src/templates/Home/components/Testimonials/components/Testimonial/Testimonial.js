import React from "react";
import AdvantageBoxIllustration from "@components/svg/AdvantageBoxIllustration";
import StaticImage from "@components/StaticImage";
import "./Testimonial.styles.scss";

const Testimonial = ({ logo, description, user }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__icon">
        <StaticImage filename={logo} />
      </div>
      <div className="testimonial__description">{description}</div>
      <div className="testimonial__user">
        <div className="testimonial__user__image">
          <StaticImage filename={user?.image} />
        </div>
        <div className="testimonial__details">
          <div className="testimonial__name">{user?.name}</div>
          <div className="testimonial__company-name">
            {user?.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
