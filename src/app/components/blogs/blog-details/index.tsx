import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogSidebar from '../blog-postbox/sidebar';
import BlogCommentForm from '../../forms/blog-comment-form';
import { IBlogDataType } from '@/types/blog-type';
import img_1 from '@/assets/images/blog/blog_img_32.jpg';

const BlogDetailsArea = ({ item }: { item: IBlogDataType }) => {
  return (
    <section className="blog-section pt-100 lg-pt-80">
      <div className="container">
        <div className="border-bottom pb-160 xl-pb-130 lg-pb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-page pe-xxl-5 me-xxl-3">
                <article className="blog-details-meta">
                <div className="blog-pubish-date">{item.tags[0]} . {item.date} . By <a href="#">{item.author}</a></div>
                  <h2 className="blog-heading">{item.title}</h2>
                  <div className="img-meta mb-15">
                    <Image src={item.img_full} alt="blog-img" className="lazy-img" /></div>
                  <p>{item.desc}</p> <br />
                  
                  <div className="quote-text">
                    <div className="row">
                      <div className="col-xl-10 m-auto">
                        <blockquote>"You don’t have to see the whole staircase, <br /> just take the first step."  </blockquote>
                        <div className="name"><span className="fw-500">– Martin Luther King Jr. </span><span></span></div>
                      </div>
                    </div>
                  </div>
                  <h3>Unlock Your Potential: Work Harder, Achieve Success with Career Buddy Club</h3>
                  <p>In today’s competitive landscape, success requires more than just talent; it demands relentless dedication and hard work. At Career Buddy Club, we understand the pivotal role that commitment plays in advancing your career. Our community is dedicated to helping you harness your potential and achieve your professional goals.</p> <br />
                  <p></p>
                  <p></p>
                  <p>Follow Career Buddy Club for education and career news.</p>

                  
                </article>
               
                
              </div>
            </div>

            {/* <div className="col-lg-4">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;