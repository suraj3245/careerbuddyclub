import React from 'react';

interface AccreditationsSectionProps {
  universityName: string;
}

export default function AccreditationsSection({ universityName }: AccreditationsSectionProps) {
  return (
    <section id="accreditations" className="upAccreditations">
      <h2 className="mb-4 text-start">Accreditations & Recognition</h2>
      <div 
        className="d-flex flex-wrap justify-content-start align-items-center gap-4"
        style={{ maxWidth: '1000px' }}
      >
        <img 
          src="/assets/images/acre/Aicte.png" 
          alt="AICTE Approved" 
          style={{ width: '170px', height: '130px', maxWidth: '100%', border: 'none', objectFit: 'contain' }} 
        />
        <img 
          src="/assets/images/acre/Dec.png" 
          alt="Distance Education Council" 
          style={{ width: '170px', height: '130px', maxWidth: '100%', border: 'none', objectFit: 'contain' }} 
        />
        <img 
          src="/assets/images/acre/ugc-deb.png" 
          alt="UGC-DEB Recognized" 
          style={{ width: '170px', height: '130px', maxWidth: '100%', border: 'none', objectFit: 'contain' }} 
        />
      </div>
    </section>
  );
}