import React from "react";
import PricingBackgroundIllustration from "@components/svg/PricingBackgroundIllustration";
import SectionDetails from "@components/SectionDetails";
import PricingBox from "./components/PricingBox";

import "./Pricing.styles.scss";

const pricingBoxes = [
  {
    title: "Basic",
    price: "10$",
    items: [
      { isActive: true, text: "Custom Domain & Email" },
      { isActive: true, text: "Client Messaging" },
      { isActive: true, text: "Tasks" },
      { isActive: false, text: "Unlimited Staff & Clients" },
      { isActive: false, text: "API Access" },
      { isActive: false, text: "All Agency Features" },
    ],
  },
  {
    title: "Standard",
    price: "15$",
    items: [
      { isActive: true, text: "Custom Domain & Email" },
      { isActive: true, text: "Client Messaging" },
      { isActive: true, text: "Tasks" },
      { isActive: true, text: "Unlimited Staff & Clients" },
      { isActive: true, text: "API Access" },
      { isActive: false, text: "All Agency Features" },
    ],
  },
  {
    title: "Premium",
    price: "30$",
    items: [
      { isActive: true, text: "Custom Domain & Email" },
      { isActive: true, text: "Client Messaging" },
      { isActive: true, text: "Tasks" },
      { isActive: true, text: "Unlimited Staff & Clients" },
      { isActive: true, text: "API Access" },
      { isActive: true, text: "All Agency Features" },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <PricingBackgroundIllustration className="pricing__bg-illustration" />
      <div className="pricing__inner">
        <div className="pricing__details">
          <SectionDetails
            title="Our Provided"
            subTitle="Pricing"
            highlightedTitle="Pricing."
            isCentered
          />
        </div>
        <div className="pricing__boxes">
          {pricingBoxes.map((item, key) => (
            <PricingBox {...item} isMain={key === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
