import FeaturesSection from "~/components/24svcs/features";

import MetricsStats from "~/components/24svcs/metric-stats";

import { GridPattern } from "~/components/ui/file-upload";
const HomePage = () => {
  return (
    <div className="">
      <FeaturesSection />
      <MetricsStats />
      <AnimatedTestimonialsDemo />
    </div>
  );
};

export default HomePage;

import React from "react";
import { AnimatedTestimonials } from "~/components/ui/animated-testimonials";
import { AnimatedTestimonialsDemo } from "~/components/24svcs/testimonials";
