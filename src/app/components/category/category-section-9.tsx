"use client";
import React, {useRef} from "react";
import std_1 from "@/assets/images/logo/studentbnner/std_1.jpg";
import std_2 from "@/assets/images/logo/studentbnner/std_2.jpg";
import std_3 from "@/assets/images/logo/studentbnner/std_3.jpg";
import std_4 from "@/assets/images/logo/studentbnner/std_4.jpg";
import content_img_1 from "@/assets/images/logo/studentbnner/content_img_1.jpg";
import content_img_2 from "@/assets/images/logo/studentbnner/content_img_2.jpg";
import content_img_3 from "@/assets/images/logo/studentbnner/content_img_3.jpg";
import content_img_4 from "@/assets/images/logo/studentbnner/content_img_4.jpg";
import content_img_5 from "@/assets/images/logo/studentbnner/content_img_5.jpg";
import content_img_6 from "@/assets/images/logo/studentbnner/content_img_6.jpg";
import content_img_7 from "@/assets/images/logo/studentbnner/content_img_7.jpg";
import content_img_8 from "@/assets/images/logo/studentbnner/content_img_8.jpg";
import content_img_9 from "@/assets/images/logo/studentbnner/content_img_9.jpg";
import content_img_10 from "@/assets/images/logo/studentbnner/content_img_10.jpg";
import content_img_11 from "@/assets/images/logo/studentbnner/content_img_11.jpg";
import content_img_12 from "@/assets/images/logo/studentbnner/content_img_12.jpg";
import content_img_13 from "@/assets/images/logo/studentbnner/content_img_13.jpg";
import content_img_14 from "@/assets/images/logo/studentbnner/content_img_14.jpg";
import content_img_15 from "@/assets/images/logo/studentbnner/content_img_15.jpg";
import content_img_16 from "@/assets/images/logo/studentbnner/content_img_16.jpg";
import content_img_17 from "@/assets/images/logo/studentbnner/content_img_17.jpg";
import content_img_18 from "@/assets/images/logo/studentbnner/content_img_18.jpg";
import content_img_19 from "@/assets/images/logo/studentbnner/content_img_19.jpg";
import content_img_20 from "@/assets/images/logo/studentbnner/content_img_20.jpg";
import content_img_21 from "@/assets/images/logo/studentbnner/content_img_21.jpg";
import content_img_22 from "@/assets/images/logo/studentbnner/content_img_22.jpg";
import content_img_23 from "@/assets/images/logo/studentbnner/content_img_23.jpg";
import content_img_24 from "@/assets/images/logo/studentbnner/content_img_24.jpg";
import content_img_25 from "@/assets/images/logo/studentbnner/content_img_25.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img_01 from "@/assets/images/logo/studentbnner/img_01.png";
import img_02 from "@/assets/images/logo/studentbnner/img_02.png";
import img_03 from "@/assets/images/logo/studentbnner/img_03.png";
import img_04 from "@/assets/images/logo/studentbnner/img_04.png";
import Image, { StaticImageData } from "next/image";
import { FaCheck } from "react-icons/fa";
const CategorySectionNine = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const scrollToSection = (sectionRef: any) => {
    if (sectionRef && sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
     <>
    
      <div className="container d-flex justify-content-center align-items-center gap-4">
        <div className="row d-flex justify-content-center align-items-center">
           <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
           <div className="container forImgbanner d-flex flex-column align-items-center justify-content-center">
            <div className="img1 d-flex" onClick={() => scrollToSection(section1Ref)}>
               <div className="row">
                   <div className="col-lg-10">
                   <Image src={img_01} className="img-fluid" alt="logo" style={{'height': '135px', width: '100%', cursor: 'pointer'}}/>
                   </div>
                   <div className="col-lg-2">
                        <span>
                   <MdKeyboardDoubleArrowRight style={{ color: '#14adbd', fontSize: '84px', cursor: 'pointer', }} />
                   </span>
                   </div>
               </div>
            </div>
            <div className="img1 d-flex" onClick={() => scrollToSection(section2Ref)}>
               <div className="row">
                   <div className="col-lg-10">
                   <Image src={img_02} className="img-fluid" alt="logo" style={{'height': '135px', width: '95%', cursor: 'pointer'}}/>
                   </div>
                   <div className="col-lg-2">
                        <span>
                   <MdKeyboardDoubleArrowRight style={{ color: '#14adbd', fontSize: '84px', cursor: 'pointer' }} />
                   </span>
                   </div>
               </div>
            </div>
            <div className="img1 d-flex" onClick={() => scrollToSection(section3Ref)}>
               <div className="row">
                   <div className="col-lg-10">
                   <Image src={img_03} className="img-fluid" alt="logo" style={{'height': '135px', width: '60%', cursor: 'pointer'}}/>
                   </div>
                   <div className="col-lg-2">
                        <span>
                   <MdKeyboardDoubleArrowRight style={{ color: '#14adbd', fontSize: '84px', cursor: 'pointer' }} />
                   </span>
                   </div>
               </div>
            </div>
            <div className="img1 d-flex" onClick={() => scrollToSection(section4Ref)}>
               <div className="row">
                   <div className="col-lg-10">
                   <Image src={img_04} className="img-fluid" alt="logo" style={{'height': '135px', width: '90%', cursor: 'pointer'}}/>
                   </div>
                   <div className="col-lg-2">
                        <span>
                   <MdKeyboardDoubleArrowRight style={{ color: '#14adbd', fontSize: '84px', cursor: 'pointer' }} />
                   </span>
                   </div>
               </div>
            </div>
          </div>

           </div>
           <div className="col-xl-5 col-lg-5 col-md-10 col-8">
           <div className="forcontent d-flex flex-column gap-3" style={{marginTop: '50px'}}>
            <span className="firstcont">
                   <h3><strong>Branding and Events</strong></h3>
                   <p style={{color: '#14adbd'}}>Promote your institution at schools and events with us, across the North India.</p>
            </span>
            <span className="firstcont2">
                   <h4><strong>Lead Based Campaign (Counseling)</strong></h4>
                   <p style={{color: 'purple'}}>Get filtered and verified leads - course/location wise</p>
            </span>
            <span className="firstcont3">
                   <h4><strong>Confirmed Admissions with Commitment</strong></h4>
                   <p style={{color: '#D5006D'}}>End to End Onboarding of Admissions</p>
            </span>
            <span className="firstcont4">
                   <h4><strong>Admissions + Placements</strong></h4>
                   <p>Confirmed admissions with our Job Guarantee Courses (for exclusive campus partners only)</p>
            </span>
          </div>

           </div>
        </div>
      </div>
<br />
<hr />
      <div className="container-fluid" style={{marginTop: '30px'}} ref={section1Ref}>
         <div className="container" style={{'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px'}}>
              <div className="row">
                  <div className="col-lg-6">
                  <div className="img1">
                   <Image src={img_01} className="img-fluid" alt="logo" style={{'height': '135px', width: '100%', cursor: 'pointer'}}/>
                      </div>
                      <span className="firstcont">
                   <h3 className="text-center mt-4"><strong>Branding and Events</strong></h3>
                   <p style={{color: '#14adbd'}}>Promote your institution at schools and events with us, across the North India.</p>
            </span>
              <div className="content-section-1 p-4 text-center">
                 <p style={{color: '#14adbd'}}><FaCheck style={{ color: '#14adbd', fontSize: '14px' }} /> &nbsp;Career Town</p>
                 <p style={{color: '#14adbd'}}><FaCheck style={{ color: '#14adbd', fontSize: '14px' }} /> &nbsp;Swami Vivekananda Awards</p>
                 <p style={{color: '#14adbd'}}><FaCheck style={{ color: '#14adbd', fontSize: '14px' }} /> &nbsp;School Visits</p>
              </div>

                  </div>

                  <div className="col-lg-6 d-flex mt-1">
                     <div className="row">
                     <div className="col-lg-6"><span>
                   <Image src={content_img_1} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                   <Image src={content_img_3} className="img-fluid mt-2" alt="logo" style={{'height': '30vh', width: '100%'}} />
                    </span>

                    </div>
                    <div className="col-lg-6"><span>
                   <Image src={content_img_2} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                   <Image src={content_img_4} className="img-fluid mt-2" alt="logo" style={{'height': '30vh', width: '100%'}} />
                    </span>

                    </div>
                     </div>
                  
                                                         
                  </div>
              </div>
              <div className="row mt-2">
                 <div className="col-lg-12">
                     <div className="row">
                          <div className="col-lg-3">
                          <Image src={content_img_5} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_6} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_7} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_8} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                     </div>
                 </div>
              </div>
         </div>
      </div>
<br />
<hr />
      <div className="container-fluid" ref={section2Ref} style={{'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', marginTop: '40px'}}>
         <div className="container">
              <div className="row">
                  <div className="col-lg-7">
                  <div className="img1">
                   <Image src={img_02} className="img-fluid" alt="logo" style={{'height': '135px', width: '100%', cursor: 'pointer'}}/>
                      </div>
                      <span className="firstcont">
                   <h3 className="text-center mt-4"><strong>Lead Based Campaign (Counseling)</strong></h3>
                   <p style={{color: 'purple'}} className="text-center">Get filtered & verified leads - course/ location wise</p>
            </span>
              <div className="content-section-1 text-center">
                 <p style={{color: 'purple'}}><FaCheck style={{ color: 'purple', fontSize: '14px' }} /> &nbsp;Career Aptitude Test</p>
                 <p style={{color: 'purple'}}><FaCheck style={{ color: 'purple', fontSize: '14px' }} /> &nbsp;Personalized One on One Counseling</p>
                 <p style={{color: 'purple'}}><FaCheck style={{ color: 'purple', fontSize: '14px' }} /> &nbsp;Get Verified Leads & Counsel directly for your institution</p>
              </div>

                  </div>

                  <div className="col-lg-5 d-flex mt-1">
                     <div className="row">
                     <div className="col-lg-6"><span>
                   <Image src={content_img_9} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                   <Image src={content_img_11} className="img-fluid mt-2" alt="logo" style={{'height': '30vh', width: '100%'}} />
                    </span>

                    </div>
                    <div className="col-lg-6"><span>
                   <Image src={content_img_10} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                   <Image src={content_img_12} className="img-fluid mt-2" alt="logo" style={{'height': '30vh', width: '100%'}} />
                    </span>

                    </div>
                     </div>
                  
                                                         
                  </div>
              </div>
              <div className="row mt-2">
                 <div className="col-lg-12">
                     <div className="row">
                          <div className="col-lg-3">
                          <Image src={content_img_13} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_14} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_15} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_16} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                     </div>
                 </div>
              </div>
         </div>
      </div>
<br />
      <hr />
      <div className="container-fluid" ref={section3Ref} style={{'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', marginTop: '40px'}}>
         <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                  <div className="img1">
                   <Image src={img_03} className="img-fluid" alt="logo" style={{'height': '16vh', width: '67%', cursor: 'pointer', margin: 'auto'}}/>
                      </div>
                      <span className="firstcont">
                   <h3 className="text-center mt-4"><strong>Confirmed Admissions with Commitment</strong></h3>
                   <p style={{color: '#D5006D'}} className="text-center">End to End Onboarding of Admissions</p>
            </span>
              <div className="content-section-1 text-center">
                 <p style={{color: '#D5006D'}}><FaCheck style={{ color: '#D5006D', fontSize: '14px' }} /> &nbsp;Career Aptitude Test</p>
                 <p style={{color: '#D5006D'}}><FaCheck style={{ color: '#D5006D', fontSize: '14px' }} /> &nbsp;Personalized One on One Counseling</p>
                 <p style={{color: '#D5006D'}}><FaCheck style={{ color: '#D5006D', fontSize: '14px' }} /> &nbsp;Get Verified Leads & Counsel directly for your institution</p>
              </div>
                  </div>
                  <div className="col-lg-6 d-flex mt-1 gap-2">
                     <span className="col-lg-6">
                   <Image src={content_img_17} className="img-fluid" alt="logo" style={{'height': '38vh', width: '95%'}} />

                    </span>
                    <span className="col-lg-6">
                   <Image src={content_img_18} className="img-fluid" alt="logo" style={{'height': '38vh', width: '95%'}} />
                     </span>
                  
                                                         
                  </div>
              </div>
              <div className="row">
                 <div className="col-lg-12">
                     <div className="row d-flex justify-content-between">
                          <div className="col-lg-3">
                          <Image src={content_img_19} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-2">
                          <Image src={content_img_20} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_21} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-3">
                          <Image src={content_img_22} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                     </div>
                 </div>
              </div>
         </div>
      </div>


<br />
      <hr />
      <div className="container-fluid" ref={section4Ref} style={{'boxShadow': 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', marginTop: '40px'}}>
         <div className="container">
              <div className="row">
                  <div className="col-lg-7">
                  <div className="img1">
                   <Image src={img_04} className="img-fluid" alt="logo" style={{'height': '16vh', width: '40%', cursor: 'pointer', margin: 'auto'}}/>
                      </div>
                      <span className="firstcont">
                   <h3 className="text-center mt-4"><strong>Admissions + Placements</strong></h3>
                   <p className="text-center">Confirmed admissions with our Job Guarantee Courses<br></br> (for exclusive campus partners only)</p>
            </span>
              <div className="content-section-1 text-center">
                 <p><FaCheck style={{ color: '#4d4d4d', fontSize: '14px' }} /> &nbsp;Confirmed Admissions through us, in selective courses only
                 </p>
                 <p><FaCheck style={{ color: '#4d4d4d', fontSize: '14px' }} /> &nbsp;Employability Trainings & Placements are 100% Assured 
                 </p>
                 <p><FaCheck style={{ color: '#4d4d4d', fontSize: '14px' }} /> &nbsp;Includes Internships, Assessments, Mentorship, Live Projects etc.
                 </p>
                 <div className="row">
                 <div className="col-lg-12">
                     <div className="row d-flex justify-content-around">
                          <div className="col-lg-6">
                          <Image src={content_img_24} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                          <div className="col-lg-6">
                          <Image src={content_img_25} className="img-fluid" alt="logo" style={{'height': '30vh', width: '100%'}} />
                          </div>
                     </div>
                 </div>
              </div>
              </div>

                  </div>
                  <div className="col-lg-5 d-flex mt-1">
                  <Image src={content_img_23} className="img-fluid" alt="logo" style={{'height': '89vh', width: '100%'}} />             
                  </div>
              </div>
         </div>
      </div>


    </>
  );
};

export default CategorySectionNine;
