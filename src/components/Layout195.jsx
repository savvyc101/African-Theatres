"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout195() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Inspiration</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              The Heart Behind African Theatres
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              African Theatres was born from a deep desire to reconnect
              African-Australian youth with their heritage. Our founders, driven
              by personal experiences, recognised the transformative power of
              cultural journeys.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Our Founders
                </h6>
                <p>
                  Passionate advocates for cultural identity and education, they
                  lead with love and purpose.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Why Africa?
                </h6>
                <p>
                  Africa is a rich tapestry of culture, history, and identity
                  waiting to be explored.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button variant="secondary">Learn More</Button>
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
