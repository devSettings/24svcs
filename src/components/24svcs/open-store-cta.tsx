import { ArrowRight, CheckCircle, CreditCard, Store } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function OpenStoreCTA() {
  return (
    <div className="mx-5 mb-10 mt-10 lg:mx-10">
      <Card className="w-full border bg-accent/40">
        <CardContent className="p-8 md:p-12">
          <div className="space-y-6">
            <div className="flex w-fit items-center rounded-sm border-gray-500/50 bg-accent/30 px-2 py-2 text-xs font-medium text-gray-600">
              <Store size={14} className="mr-1" />
              <p>Join 1000+ sellers</p>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-left md:text-6xl">
              Ready to open your store?
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Launch your online store on our marketplace and reach thousands of
              potential customers. Our All in platform is designed to scale your
              Business.
            </p>

            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-800" />
                <span>Free 30-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-cyan-800" />
                <span>No credit card required</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 w-full bg-cyan-800 px-8 text-base font-normal text-white transition-colors duration-75 ease-linear hover:bg-cyan-800/50 sm:w-auto"
              >
                Open your store
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="h-12 w-full border-none px-8 text-base font-normal transition-colors duration-200 hover:text-white sm:w-auto"
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
