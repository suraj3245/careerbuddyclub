import { CheckCircle2, Scale, Trophy, ChevronRight } from "lucide-react";

export default function BottomBanner() {
  return (
    <div className="cfBottomBanner">
      <div className="cfbbLeft">
        <h3 className="cfbbTitle">Compare. Shortlist. Decide with Confidence.</h3>
        <div className="cfbbSteps">
          <div className="cfbbStep">
            <span className="cfbbStepIcon"><CheckCircle2 size={18} /></span>
            <div className="cfbbStepText">
              <span className="cfbbStepTitle">Select Programs</span>
              <span className="cfbbStepSub">Choose courses you want to compare</span>
            </div>
          </div>
          <ChevronRight className="cfbbArrow" size={20} />
          <div className="cfbbStep">
            <span className="cfbbStepIcon"><Scale size={18} /></span>
            <div className="cfbbStepText">
              <span className="cfbbStepTitle">Compare Side by Side</span>
              <span className="cfbbStepSub">Compare fees, duration, placements</span>
            </div>
          </div>
          <ChevronRight className="cfbbArrow" size={20} />
          <div className="cfbbStep">
            <span className="cfbbStepIcon"><Trophy size={18} /></span>
            <div className="cfbbStepText">
              <span className="cfbbStepTitle">Choose the Best</span>
              <span className="cfbbStepSub">Pick the right program for your future</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cfbbRight">
        <span className="cfbbRightLabel">You can compare up to</span>
        <span className="cfbbRightCount">4 Programs</span>
        <button className="cfbbBtn">Start Comparing Now</button>
      </div>
    </div>
  );
}
