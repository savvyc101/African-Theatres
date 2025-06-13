"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your questions about volunteering with African
            Theatres and how you can help.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I volunteer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can volunteer by applying through our website. We offer
              various roles that suit different skills and interests. Once you
              apply, our team will reach out with further details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is the commitment?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The commitment varies based on the role you choose. Some
              opportunities may require a few hours a week, while others could
              involve more intensive involvement during trips. We aim to
              accommodate your availability.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Is training provided?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide training for all volunteers. This includes
              cultural sensitivity training and information about our
              programmes. Our goal is to ensure you feel prepared and confident
              in your role.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I volunteer remotely?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We have remote volunteering opportunities available,
              especially in areas like fundraising and outreach. You can
              contribute from anywhere while still making a meaningful impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I have questions?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you have any questions, feel free to reach out to us via the
              contact form. Our team is here to help you with any inquiries. We
              look forward to hearing from you!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
