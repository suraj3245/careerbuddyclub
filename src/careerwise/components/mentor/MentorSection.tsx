import { GraduationCap, Star, Play, CheckCircle } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Ayushmaan Kumar Tiwari",
    rating: 4.9,
    experience: "4 years of experience",
    tags: [
      { icon: "🎯", label: "Strategic" },
      { icon: "🧠", label: "Adaptive" },
      { icon: "💡", label: "Insightful" },
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Priya Sharma",
    rating: 4.8,
    experience: "6 years of experience",
    tags: [
      { icon: "📊", label: "Analytical" },
      { icon: "🤝", label: "Supportive" },
      { icon: "🔥", label: "Motivational" },
    ],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Rahul Verma",
    rating: 4.8,
    experience: "7 years of experience",
    tags: [
      { icon: "📍", label: "Innovative" },
      { icon: "🎯", label: "Focused" },
      { icon: "❤️", label: "Empathetic" },
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Ananya Mehta",
    rating: 4.9,
    experience: "5 years of experience",
    tags: [
      { icon: "🎨", label: "Creative" },
      { icon: "🔍", label: "Detail-oriented" },
      { icon: "🏅", label: "Inspiring" },
    ],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export default function MentorSection() {
  return (
    <section className="mentorSection">
      <div className="msContainer">
        
        <div className="msHeaderCenter">
          {/* <span className="msBadge">
            <GraduationCap size={16} strokeWidth={2.5} />
            Learn from Experienced Mentors
          </span> */}
          <h2 className="msTitleCenter">Meet Our Expert Mentors</h2>
          <p className="msLedeCenter">
            Get guidance from industry experts and academic leaders <br/>
            who are passionate about your success.
          </p>
        </div>

        <div className="msGrid">
          {mentors.map((mentor, index) => (
            <div className="mentorCard" key={index}>
              <div className="mentorImageWrapper">
                <Image 
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="mentorImg"
                />
                <div className="mentorOverlay" />
                
                <div className="mentorRating">
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <span>{mentor.rating}</span>
                </div>
                
                <div className="mentorVerified">
                  <div className="verifiedBadge">
                    <CheckCircle size={20} fill="#f59e0b" color="#fff" />
                  </div>
                </div>

                <div className="playButtonWrapper">
                  <button className="playButton">
                    <Play size={20} fill="#fff" />
                  </button>
                </div>
              </div>
              
              <div className="mentorInfo">
                <h3>{mentor.name}</h3>
                <p>{mentor.experience}</p>
                <div className="mentorTags">
                  {mentor.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      <span className="tagIcon">{tag.icon}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
