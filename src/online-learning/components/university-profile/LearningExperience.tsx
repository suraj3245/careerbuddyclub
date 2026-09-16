import React from 'react';
import { Monitor, Video, BookOpen, MessageCircle, FileText, Users, Headphones, ClipboardCheck } from 'lucide-react';

interface LearningExperienceProps {
  universityName: string;
}

export default function LearningExperience({ universityName }: LearningExperienceProps) {
  const experiences = [
    {
      icon: Monitor,
      title: "Learning Management System",
      desc: "Access courses anytime through a modern LMS"
    },
    {
      icon: Video,
      title: "Live & Recorded Classes",
      desc: "Attend live sessions or watch recordings at your pace"
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      desc: "Access e-books, journals, and research materials"
    },
    {
      icon: MessageCircle,
      title: "Faculty Interaction",
      desc: "Direct access to professors through discussion forums"
    },
    {
      icon: FileText,
      title: "Assignments & Projects",
      desc: "Regular assessments to reinforce learning"
    },
    {
      icon: Users,
      title: "Discussion Forums",
      desc: "Engage with peers in moderated academic discussions"
    },
    {
      icon: Headphones,
      title: "Academic Counselling",
      desc: "Dedicated academic advisors for guidance"
    },
    {
      icon: ClipboardCheck,
      title: "Online Examinations",
      desc: "Proctored online exams from the comfort of home"
    }
  ];

  return (
    <section id="experience" className="upExperience">
      <h2>The Online Learning Experience</h2>
      <div className="upExperienceGrid">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <div key={index} className="upExperienceCard">
              <Icon className="upExperienceIcon" size={32} />
              <h3 className="upExperienceTitle">{exp.title}</h3>
              <p className="upExperienceDesc">{exp.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}