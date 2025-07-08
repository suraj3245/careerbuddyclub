import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blog_data1 from '@/data/college-blog1';
import { IBlogDataType } from '@/types/blog-type';

const CollegeBlogSidebar = ({ currentId }: { currentId: number | string }) => {
  const recommended = blog_data1.filter((blog) => blog.id !== currentId).slice(0, 5);
  
  const contactDetails = {
    email: 'admission@careerbuddyclub.com',
    phone: '+917456000100',
    socials: {
      facebook: 'https://facebook.com/careerbuddyclub',
      instagram: 'https://instagram.com/careerbuddyclub',
      twitter: 'https://twitter.com/careerbuddyclub',
      linkedin: 'https://linkedin.com/company/careerbuddyclub',
    },
  };

  return (
    <aside className="bg-grey p-4 rounded shadow-lg mt-5">
      <h5 className="fw-bold mb-4">Recommended Blogs</h5>
      <ul className="list-unstyled">
        {recommended.map((blog: IBlogDataType) => (
          <li key={blog.id} className="mb-3 d-flex gap-3">
            <Image
              src={blog.img_full}
              alt={blog.title}
              width={80}
              height={60}
              className="rounded"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <Link href={`/college-blogs/${blog.id}`} className="fw-semibold text-dark d-block">
                {blog.title}
              </Link>
              <small className="text-muted">{blog.date}</small>
            </div>
          </li>
        ))}
      </ul>
      {/* Contact Info */}

      <div className="card p-4 mt-5 shadow-sm">
                <h5 className=" mb-3">Contact Details</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <span>Email:</span>{' '}
                    <a href={`mailto:${contactDetails.email}`}
                    className="text-decoration-none text-primary icon-hover"
                      target="_blank"
                      rel="noopener noreferrer">
                      {contactDetails.email}
                      
                    </a>
                  </li>
                  <li className="mb-2">
                    <span>Admission Enquiry:</span> 
                   <span className="text-decoration-none text-primary icon-hover">{contactDetails.phone}</span> 
                  </li>
                  <li>
                    <span>Social:</span>{' '}
                    <a
                      href={contactDetails.socials.facebook}
                      className="me-2 text-decoration-none text-primary icon-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href={contactDetails.socials.instagram}
                      className="me-2 text-decoration-none text-primary icon-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href={contactDetails.socials.twitter}
                      className="me-2 text-decoration-none text-primary icon-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href={contactDetails.socials.linkedin}
                      className="me-2 text-decoration-none text-primary icon-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
    </aside>
  );
};

export default CollegeBlogSidebar;
