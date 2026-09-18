import { fetchOnlineStreams, fetchAllCollegesDetails } from "../data/api";
import HeroClient from "./HeroClient";

export default async function Hero() {
  const [streams, collegeDetails] = await Promise.all([
    fetchOnlineStreams(),
    fetchAllCollegesDetails(),
  ]);

  return <HeroClient streams={streams} collegeDetails={collegeDetails} />;
}
