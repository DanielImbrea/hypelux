import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import SectionDetails from "@components/SectionDetails";
import ContactBgIllustration from "@components/svg/ContactBgIllustration";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ContactForm from "@containers/ContactForm";
import ParticleX from "@components/svg/ParticleX";

import "./ContactFaq.styles.scss";
import "react-accessible-accordion/dist/fancy-example.css";

const collapseItems = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veritatis qui magnam quod adipisci cum tempora, est dolor id
    repellendus sequi.`,
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veritatis qui magnam quod adipisci cum tempora, est dolor id
    repellendus sequi.`,
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, est?",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Veritatis qui magnam quod adipisci cum tempora, est dolor id
    repellendus sequi.`,
  },
];

const ContactFaq = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__inner container">
        <ContactBgIllustration className="contact__bg-illustration" />
        <div className="contact__left-side">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <ContactForm />
          </ScrollAnimation>
        </div>

        <div className="contact__faq">
          <SectionDetails
            subTitle="CONTACT"
            title="Let's talk about"
            highlightedTitle="Everything"
          />
          <ParticleX className="contact__particle anim-xParticlePathHorizontal" />
          <Accordion>
            {collapseItems.map((item, key) => {
              return (
                <ScrollAnimation
                  animateIn="fadeInUp"
                  delay={(key + 1) * 100}
                >
                  <AccordionItem className="collapse-item">
                    <AccordionItemHeading>
                      <AccordionItemButton className="collapse-item__header">
                        <div className="collapse-item__title">
                          {item.title}
                        </div>
                        <div className="collapse-item__arrow">+</div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordion__panel collapse-item__description">
                      <p>{item.description}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </ScrollAnimation>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ContactFaq;
