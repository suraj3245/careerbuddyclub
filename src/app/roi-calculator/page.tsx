import { Metadata } from "next";
import OnlineLearningShell from "@/online-learning/OnlineLearningShell";
import ROICalculator from "@/online-learning/components/roi/ROICalculatorPage";
import { fetchAllCollegesDetails, fetchOnlineStreams } from "@/online-learning/data/api";

export const metadata: Metadata = {
  title: "Online Degree ROI Calculator | Career Buddy Club",
  description:
    "Estimate the return on investment of an online degree: fees, salary uplift and break-even point.",
};

export default async function ROICalculatorPage() {
  const [collegesData, streamsData] = await Promise.all([
    fetchAllCollegesDetails(),
    fetchOnlineStreams(),
  ]);

  return (
    <OnlineLearningShell>
      <ROICalculator collegesData={collegesData} streamsData={streamsData} />
    </OnlineLearningShell>
  );
}

