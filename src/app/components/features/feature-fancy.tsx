
import React from "react";
import PartnersSlider2 from "../partners/partners-slider2";
import Link from "next/link";
import PartnersSlider4 from "../partners/partners-slider4";


const FancyMid = () => {
  return (
    <section className="hero-section">
      <aside>
        <div className="sticky">
          <div className="apply-btn">
          <span className="span-text">Appply Now</span><span className="span-arrow"></span></div>
           <ul className="sticky-ul">
            <li><div className="sticky-icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Download-a-Prospectus-1.png" alt="" /></div><Link href="career-aptitude"><p>Career Development Plans</p></Link></li>
           
            <li><div className="sticky-icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Fees-and-Funding.png" alt="" /></div><p>Training and Mentorship Programs</p></li>
           
            <li><div className="sticky-icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Start-a-Taster.png" alt="" /></div><p>Jobs & Internship Oppurtunities</p></li>
           
            <li><div className="sticky-icons"><img src="https://io-academy.uk/wp-content/uploads/2022/10/coding-quick-start-4.png" alt="" /></div><p>Networking Opportunities</p></li>
           </ul>
        </div>
        </aside>
        

      <div className="hero-container">
      <div className="content-container">
        <h3>Overview</h3>
        <h1>Connecting Talent, Colleges, Recruiters</h1>
        <p>Welcome to the Career Buddy Club's Aptitude Test. Dive into a quick and insightful assessment that will shine a light on your unique personality, cognitive strengths, and professional aptitudes.
        This easy-to-complete test will guide you through a  series of questions aimed at pinpointing your capabilities and preferences. Discover your hidden talents and understand how you can apply them in your career path.
        </p>
      
      </div>
        
      <div className="course-block">
        <h1>What's so great about it?</h1>
        <ul className="course-block-ul">
         
          <li><div className="icons"><img src="	https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-coding-bootcamp.png" alt="" /></div><p>Learn from Recruiters</p></li>
          
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Experienced-Trainers.png" alt=""/></div><p>Real World Practice</p></li>
          
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Industry-Approved-Curriculum.png" alt="" /></div><p>Specialized Training</p></li>
          
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Intro-To-Employers.png" alt="" /></div><p>Job Interviews</p></li>
         
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-coding-bootcamp.png" alt="" /></div><p>4-6 months Job Training</p></li>
          
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Experienced-Trainers.png" alt="" /></div><p>Industry Certifications</p></li>
         
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Portfolio-of-Projects.png" alt="" /></div><p>Skill Assessment Tests</p></li>
         
          <li><div className="icons"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Guest-Lectures.png" alt="" /></div><p>10+ Real-Life Projects</p></li>
        </ul>
      </div>

      <div className="industry-block">
        <h1>Industry Connections</h1>
        <p>Career Buddy graduates are highly sought after by tech companies. Whether you’re aiming to join a creative agency, a startup, or a corporate; to work in publishing, tech for good, healthcare, or finance, we can connect you with employers eager to meet you. Here are just some of the companies who are keen to meet Career Buddy graduates.</p>
        <ul className="industry-block-ul">
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-13.png.webp" alt="" /></div>
          </li>
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-7.png.webp" alt="" /></div>
          </li>
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2022/09/full-stack-track-remote-10.png.webp" alt="" /></div>
          </li>
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-12.png.webp" alt="" /></div>
          </li>
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2020/08/Logo_PlaySportsNetwork_grey_500px.png.webp" alt="" /></div>
          </li>
          <li><div className="li-img"><img src="https://io-academy.uk/wp-content/uploads/2020/08/full-stack-track-8.png.webp" alt="" /></div>
          </li>
        </ul>
        <div className="slider">
        <PartnersSlider4/>
        </div>
       
      </div>
      <div className="culture-block">
        <h1>Culture</h1>
        <p>At Career Buddy Club, we foster a culture of continuous learning and personal growth. We deeply value your journey and are committed to championing diversity and fairness within the tech industry.

        Our community of students and alumni is a source of pride, sharing our dedication to open dialogue about mental health, inclusion, and overcoming personal challenges.
 
        While intensive learning presents its challenges, at Career Buddy Club, you'll find a supportive network always ready to have your back.</p>

        
      </div>

      <div className="team-block">
       
       <div className="team-block-content">
        <h3>From the team</h3>
        <h2>Mr. Abhinav Manohar</h2>
         <p>Councellor At CBC</p>
         <br></br>
         <br></br>
         <p>Navigating the path toward a fulfilling career can seem daunting, yet it's a transformative journey! Over the past three years, I've had the privilege of mentoring numerous individuals, many of whom were uncertain about their career direction, and empowering them with the necessary insights and tools to embark on their journey towards meaningful careers</p>

         </div>
         <div className="team-img">
          <img src="https://io-academy.uk/wp-content/uploads/2022/10/coding-quick-start.png.webp" alt=""/>
         </div>

      </div>
      </div>
    </section>
  );
};
export default FancyMid;
