"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader2() {
  return (
    <section id="relume">
      <div className="flex min-h-svh flex-col">
        <div className="relative flex-1">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            alt="Relume placeholder image 1"
            className="absolute size-full object-cover"
          />
        </div>
        <div className="px-[5%]">
          <div className="mx-auto max-w-lg py-12 text-center md:py-16 lg:py-20">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              The Journey
            </h1>
            <p className="md:text-md">
              Experience a transformative trip that connects youth with their
              heritage and culture in Africa.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
              <Badge>
                <a href="#">Cultural Reconnection</a>
              </Badge>
              <Badge>
                <a href="#">Identity Journey</a>
              </Badge>
              <Badge>
                <a href="#">Empower Youth</a>
              </Badge>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
