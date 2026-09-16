"use client";

import React from 'react';
import { Star } from 'lucide-react';

export default function StudentStories() {
  const stories = [
    {
      name: "Priya S.",
      program: "Online MBA",
      year: "2025",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The flexibility of online learning allowed me to advance my career while continuing to work. The faculty support was excellent."
    },
    {
      name: "Rahul M.",
      program: "Online MCA",
      year: "2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "The curriculum was industry-relevant and the live sessions made complex topics easy to understand."
    },
    {
      name: "Ananya K.",
      program: "Online BBA",
      year: "2025",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Career Buddy helped me find the right university. The counselling support made the admission process seamless."
    }
  ];

  return (
    <section className="upStories">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
        <h2>What Students Say</h2>
        <div className="d-flex gap-1 text-warning">
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <Star size={20} fill="currentColor" />
          <span className="text-dark ms-2 fw-bold">4.8/5</span>
        </div>
      </div>
      <div className="upStoriesGrid">
        {stories.map((story, index) => (
          <div key={index} className="upStoryCard">
            <div className="d-flex gap-1 text-warning mb-3">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <p className="upStoryQuote">"{story.quote}"</p>
            <div className="d-flex align-items-center gap-3 mt-4">
              <img src={story.avatar} alt={story.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <p className="upStoryAuthor mb-0">{story.name}</p>
                <p className="upStoryProgram mb-0">{story.program} - {story.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
