import React from 'react';
import Image from 'next/image';
import { IBlogDataType } from '@/types/blog-type';
import CollegeBlogSidebar from '../blog-sidebar/aside';

const CollegeBlogDetailsArea = ({ item }: { item: IBlogDataType }) => {
  return (
    <section className="pt-5 pb-5" style={{ background: '#ebebebff' }}>
      <div className="container">
        <div className="row gy-5">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="pe-lg-4">
              <div className="mb-2 text-muted small mt-5">
                {item.tags[0]} · {item.date} · By <strong>{item.author}</strong>
              </div>

              {/* Title */}
              <h2 className="fw-semibold mb-3 mt-5 leading-none" style={{ marginTop:'2rem', lineHeight:'3.5rem', fontSize: '2rem' }}>{item.title}</h2>
              
              {/* Banner */}
              <div className="mb-4">
                <Image
                  src={item.img_full}
                  alt={item.title}
                  className="img-fluid rounded shadow-sm"
                  width={800}
                  height={400}
                />
              </div>

              {/* Description */}
              {/* {item.descComponent ? <item.descComponent /> : <p className="lead">{item.desc}</p>} */}

              {/* Quote */}
              <blockquote className="blockquote bg-light p-4 rounded mt-4 mb-4">
                <p className="mb-0">
                  "You don’t have to see the whole staircase, just take the first step."
                </p>
                <footer className="blockquote-footer mt-2"></footer>
              </blockquote>

              {/* CTA */}
              <h4 className="mt-4">Why Career Buddy Club Matters</h4>
              <p>
                We help students unlock their academic journey with curated college insights, placement stats,
                and detailed comparisons — so you don’t miss out on opportunities that fit your dream path.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <CollegeBlogSidebar/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeBlogDetailsArea;
