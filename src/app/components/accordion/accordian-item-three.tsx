import React from "react";
import Link from "next/link";
// type
type IPropType = {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
  parent: string;
  path: string;
  bdesc: string;
};

const AccordionItemThree = ({
  id,
  title,
  isShow,
  desc,
  parent,
  path,
  bdesc,
}: IPropType) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${isShow ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isShow ? "true" : "false"}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </div>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isShow ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent={`#{parent}`}
      >
        <div className="accordion-body">
          <p>{desc}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AccordionItemThree;
