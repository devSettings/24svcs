import FeaturesSection from "~/components/24svcs/features";
import { AnimatedTestimonialsDemo } from "~/components/24svcs/testimonials";

import MetricsStats from "~/components/24svcs/metric-stats";
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
