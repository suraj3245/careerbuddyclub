import ROICalculatorClient from "./ROICalculatorClient";
import { fetchOnlineStreams, fetchAllCollegesDetails } from "../../data/api";

export default async function ROICalculatorSection() {
  const streams = await fetchOnlineStreams();
  const collegeDetails = await fetchAllCollegesDetails();
  
  return <ROICalculatorClient streams={streams} collegeDetails={collegeDetails} />;
}
