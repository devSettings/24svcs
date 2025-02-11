import { ReactNode } from "react";
import TrialBanner from "~/components/24svcs/trial-banner";
import Footer from "~/components/footer";

interface Props {
  children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="mb-[5rem]">
        <TrialBanner />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
