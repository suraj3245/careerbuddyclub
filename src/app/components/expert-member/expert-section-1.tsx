"use client";
import React from "react";
import Image from "next/image";
import expert_data_two from "@/data/expert-data-two";
import expert_data from "@/data/expert-data";

export default function TeamOfExperts() {
  const topMembers = expert_data_two.slice(0, 3); // first 3
  const bottomMembers = expert_data.slice(0, 3); // first 3

  return (
    <section className="toe-section">
      <div className="toe-grid">
        {/* Top row heading */}
        <h2 className="toe-row-heading">Meet Our Leadership</h2>
        <div className="toe-row">
          {topMembers.map((m) => (
            <div className="toe-imgcell" key={m.id}>
              <div className="toe-img-wrap">
                <Image
                  src={m.img}
                  alt={m.name}
                  className="toe-img"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="toe-info">
                <span className="toe-name">{m.name}</span>
                <br />
                <span className="toe-role">{m.designation}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row heading */}
        <h2 className="toe-row-heading" style={{marginTop:"3rem"}}>Team of Experts</h2>
        <div className="toe-row">
          {bottomMembers.map((m) => (
            <div className="toe-imgcell" key={m.id}>
              <div className="toe-img-wrap">
                <Image
                  src={m.img}
                  alt={m.name}
                  className="toe-img"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="toe-info">
                <span className="toe-name">{m.name}</span>
                <br />
                <span className="toe-role">{m.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .toe-section {
          background: #f4f7fa;
          padding: 40px 0;
          margin-top: 3rem;
        }
        .toe-row-heading {
          font-weight: 600;
          margin: 20px 0;
          color: #181c2a;
          text-align: left;
          margin-top:1rem;
          font-size:2rem;
          font-family: 'Inter', Arial, sans-serif;
        }
        .toe-grid {
          display: flex;
          flex-direction: column;
          padding: 0 48px;
          width: 100%;
          
          
        }
        .toe-row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-evenly; 
           align-items: center;
           margin-top: 2rem;
        }
        .toe-imgcell {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px; 
        }
        .toe-img-wrap {
          position: relative;
          width: 350px; 
          height: 350px; 
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        }
        .toe-img {
          object-fit: contain;
          border-radius: 50%;
        }
        .toe-info {
          text-align: center;
          line-height: 1.6; 
        }
        .toe-name {
          font-weight: 700;
          font-size: 1.3rem;
          color: #181c2a;
        }
        .toe-role {
          font-size: 1rem;
          color: #62687a;
        }
        @media (max-width: 900px) {
          .toe-row {
            flex-direction: column;
            align-items: center;
          }
          .toe-img-wrap {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
