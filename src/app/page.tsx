import BlogSection from "~/components/24svcs/latest-insight";
import MetricsStats from "~/components/24svcs/metric-stats";
import OpenStoreCTA from "~/components/24svcs/open-store-cta";
import { Testimonials } from "~/components/24svcs/testimonials";
const HomePage = () => {
  return (
    <div className="">
      <BlogSection />
      <MetricsStats />
      <Testimonials />
      <OpenStoreCTA />
    </div>
  );
};

export default HomePage;
