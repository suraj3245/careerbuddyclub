import React from 'react';
import { Bell, Users, ListChecks, Search, FileText, House } from 'lucide-react';

// Data for the admission steps
const benefits = [
    {
        icon: Bell,
        title: "Take the Career Aptitude Test",
        description: "Discover the best-suited career path through a tech-based aptitude test.",
        badge: "CAT Test",
    },
    {
        icon: Users,
        title: "Complete Your Profile",
        description: "Add your academic background to receive AI-driven college suggestions.",
        badge: "Complete Profile",
    },
    {
        icon: ListChecks,
        title: "Shortlist Colleges",
        description: "Pick your dream colleges and apply to many with one application.",
        badge: "Shortlist Colleges",
    },
    {
        icon: Search,
        title: "Get Expert Guidance",
        description: "Connect with mentors for advice on courses, colleges, and fees.",
        badge: "Expert Guidance",
    },
    {
        icon: FileText,
        title: "Upload Documents & Pay Fees",
        description: "Simplify your application by submitting documents and making payments online.",
        badge: "Documentation",
    },
    {
        icon: House,
        title: "Confirm Admission",
        description: "Secure your seat at the college of your choice.",
        badge: "Admission", 
    },
];

const CollegeDekho = () => {
    // Custom styles adapted to match the light blue/teal theme
    const customStyles = `
        /* Define custom colors */
        :root {
            --custom-blue: #00bcd4; 
            --custom-light-bg: #f5f5f5; 
        }
        
        /* Overall page background */
        .page-container {
            background-color: var(--custom-light-bg) !important;
        }

        /* Main card styling */
        .card-benefit {
            position: relative;
            background-color: #ffffff; 
            border: 1px solid #e9e9e9; 
            border-radius: 12px;
            padding: 2.5rem 2rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            min-height: 380px; 
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); 
            z-index: 10; 
        }
        
        
        .benefit-number-bg::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 60px; 
            background: linear-gradient(to top, 
                #ffffff 0%, 
                rgba(255, 255, 255, 0.9) 30%, 
                rgba(255, 255, 255, 0) 100%
            );
            z-index: 5; 
            pointer-events: none;
        }
        

        /* Icon styling */
        .benefit-icon {
            color: var(--custom-blue); 
            margin-bottom: 0.5rem; 
            z-index: 1;
        }

        /* NEW: Spacer to push content down to overlap the centered number */
        .content-spacer {
            min-height: 130px; 
            width: 100%;
        }

        /* Large, centered number styling */
        .benefit-number-bg {
            position: absolute;
            top: 40%; 
            left: 30%; 
            transform: translate(-50%, -50%); 
            font-size: 8rem; 
            font-weight: 900; 
            color: #e0f7fa; 
            line-height: 1;
            z-index: 0;
            pointer-events: none;
            user-select: none;
            opacity: 1;
           
        }

        /* Title styling */
        .benefit-title {
            font-size: 1.3rem; 
            font-weight: 600; 
            color: #212529; /* Dark text */
            margin-bottom: 0.5rem; 
            z-index: 1;
        }

        /* Description styling */
        .benefit-description {
            font-size: 0.95rem; 
            color: #6c757d; 
            line-height: 1.6;
            z-index: 1;
        }

        /* Badge styling: Custom background and text color to match image */
        .badge-custom {
            background-color: #e0f7fa !important; 
            color: var(--custom-blue) !important; 
            font-weight: 500 !important;
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
            border-radius: 50rem !important;
            z-index: 6 !important; 
            position: relative; 
            margin-top: auto; 
        }
        
        /* Responsive adjustments */
        @media (max-width: 991.98px) {
            .card-benefit {
                min-height: auto; 
            }
            .content-spacer {
                min-height: 50px; 
            }
            .benefit-number-bg {
                font-size: 8rem;
            }
        }
    `;

    return (
        <div className="d-flex flex-column align-items-center py-5 px-3 px-sm-5 min-vh-100 page-container">
            {/* Inject custom CSS for desired styling */}
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            {/* Header Content */}
            <header className="w-100 text-center mb-5">
                <div className="col-lg-8 mx-auto">
                    <h2 className="display-5 fw-bolder text-dark mb-3">
                        End-to-End Admission Process Simplified
                    </h2>
                    <p className="lead text-secondary">
                        Guiding you from search to placement, every step of the way!
                    </p>
                </div>
            </header>

            {/* Cards Grid - Constrained to 1200px max width and centered */}
            <div className="w-100 mx-auto" style={{ maxWidth: '1200px' }}>
                <div className="row g-4 justify-content-center" role="list">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        const benefitNumber = (index + 1).toString().padStart(2, '0');

                        return (
                            // Card container
                            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex" role="listitem">
                                <div className="card-benefit flex-fill">
                                    {/* Icon */}
                                    <div className="benefit-icon">
                                        <IconComponent size={32} strokeWidth={1.5} /> 
                                    </div>
                                    
                                    {/* Spacer to push title/description down */}
                                    <div className="content-spacer" />
                                    
                                    {/* Large Step Number Background */}
                                    <div className="benefit-number-bg">
                                        {benefitNumber}
                                    </div>

                                    {/* Title */}
                                    <h3 className="benefit-title">
                                        {benefit.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="benefit-description">
                                        {benefit.description}
                                    </p>

                                    {/* Badge */}
                                    {benefit.badge && (
                                        <div className="z-1 mt-3">
                                            <span className="badge badge-custom">
                                                {benefit.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CollegeDekho;