import { Metadata } from "next";
import CareerWiseShell from "@/careerwise/CareerWiseShell";
import ROICalculator from "@/careerwise/components/roi/ROICalculatorPage";

export const metadata: Metadata = {
  title: "Online Degree ROI Calculator | Career Buddy Club",
  description:
    "Estimate the return on investment of an online degree: fees, salary uplift and break-even point.",
};

export default function ROICalculatorPage() {
  return (
    <CareerWiseShell>
      <ROICalculator />
    </CareerWiseShell>
  );
}
