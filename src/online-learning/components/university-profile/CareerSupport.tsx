import React from 'react';
import { Briefcase, Users, Target, Zap, Building2, Heart, Presentation, TrendingUp } from 'lucide-react';

interface CareerSupportProps {
  universityName: string;
}

export default function CareerSupport({ universityName }: CareerSupportProps) {
  const leftServices = [
    { icon: Briefcase, title: "Resume Building", desc: "Professional resume support" },
    { icon: Users, title: "Interview Preparation", desc: "Mock interviews and coaching" },
    { icon: Target, title: "Career Counselling", desc: "Personalized career guidance" },
    { icon: Zap, title: "Skill Workshops", desc: "Industry-relevant skill building" }
  ];

  const rightServices = [
    { icon: Building2, title: "Internship Guidance", desc: "Connecting students with opportunities" },
    { icon: Heart, title: "Alumni Network", desc: "Access to alumni community" },
    { icon: Presentation, title: "Industry Webinars", desc: "Live sessions with experts" },
    { icon: TrendingUp, title: "Placement Assistance", desc: "Support in job search" }
  ];

  return (
    <section id="support" className="upCareer">
      <h2>Career & Student Support</h2>
      <div className="upCareerGrid">
        <div>
          {leftServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="upCareerItem">
                <Icon className="upCareerItemIcon" size={24} />
                <div>
                  <h3 className="upCareerItemTitle">{service.title}</h3>
                  <p className="upCareerItemDesc">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {rightServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="upCareerItem">
                <Icon className="upCareerItemIcon" size={24} />
                <div>
                  <h3 className="upCareerItemTitle">{service.title}</h3>
                  <p className="upCareerItemDesc">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}