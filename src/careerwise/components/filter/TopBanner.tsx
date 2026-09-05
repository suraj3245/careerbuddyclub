import { Building2, BookCopy, Users, Scale } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="cfTopBanner">
      <div className="cfFeature">
        <span className="cfFeatureIcon cff-1">
          <Building2 size={20} strokeWidth={2} />
        </span>
        <div className="cfFeatureText">
          <span className="cfFeatureTitle">100+</span>
          <span className="cfFeatureSub">Top Universities</span>
        </div>
      </div>
      
      <div className="cfFeature">
        <span className="cfFeatureIcon cff-2">
          <BookCopy size={20} strokeWidth={2} />
        </span>
        <div className="cfFeatureText">
          <span className="cfFeatureTitle">500+</span>
          <span className="cfFeatureSub">Online Programs</span>
        </div>
      </div>

      <div className="cfFeature">
        <span className="cfFeatureIcon cff-3">
          <Users size={20} strokeWidth={2} />
        </span>
        <div className="cfFeatureText">
          <span className="cfFeatureTitle">Expert Guidance</span>
          <span className="cfFeatureSub">From Education Experts</span>
        </div>
      </div>

      <div className="cfFeature">
        <span className="cfFeatureIcon cff-4">
          <Scale size={20} strokeWidth={2} />
        </span>
        <div className="cfFeatureText">
          <span className="cfFeatureTitle">Compare &amp; Save</span>
          <span className="cfFeatureSub">Make Informed Decisions</span>
        </div>
      </div>
    </div>
  );
}
