import React from 'react';
import { Award, Shield, CheckCircle, Globe } from 'lucide-react';

interface AccreditationsSectionProps {
  universityName: string;
}

export default function AccreditationsSection({ universityName }: AccreditationsSectionProps) {
  return (
    <section id="accreditations" className="upAccreditations">
      <h2>Accreditations & Recognition</h2>
      <div className="upTrustGrid">
        <div className="upTrustBadge">
          <Award className="upTrustIcon" size={32} />
          <h3 className="upTrustTitle">UGC Recognized</h3>
          <p className="upTrustDesc">University Grants Commission</p>
        </div>
        <div className="upTrustBadge">
          <Shield className="upTrustIcon" size={32} />
          <h3 className="upTrustTitle">NAAC Accredited</h3>
          <p className="upTrustDesc">National Assessment and Accreditation Council</p>
        </div>
        <div className="upTrustBadge">
          <CheckCircle className="upTrustIcon" size={32} />
          <h3 className="upTrustTitle">AICTE Approved</h3>
          <p className="upTrustDesc">All India Council for Technical Education</p>
        </div>
        <div className="upTrustBadge">
          <Globe className="upTrustIcon" size={32} />
          <h3 className="upTrustTitle">Distance Education Bureau</h3>
          <p className="upTrustDesc">DEB Approved Programs</p>
        </div>
      </div>
    </section>
  );
}