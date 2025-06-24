import React, { useEffect } from "react";
interface TopCareerProps {
  topCategories: string[];
}
const company_data: {
  name: string;
  desc: string;
}[] = [
  {
    name: "RIA",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Investigative and Artistic. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by the Artistic type which prefers expression and originality.",
  },
  {
    name: "RAI",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Artistic and Investigative. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Artistic type thrives on expression and originality. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "RIS",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Investigative and Social. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "RSI",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Social and Investigative. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Social type denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "RIE",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Investigative and Enterprising. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "REI",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Enterprising and Investigative. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "RIC",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Investigative and Conventional. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "RCI",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Conventional and Investigative. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "RAS",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Artistic and Social. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "RSA",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Social and Artistic. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "RAE",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Artistic and Enterprising. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "REA",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Enterprising and Artistic. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Artistic type which indicates a strong preference for expression and originality.",
  },
  {
    name: "RAC",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Artistic and Conventional. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "RCA",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Conventional and Artistic. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "RSE",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Social and Enterprising. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "RES",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Enterprising and Social. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "RSC",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Social and Conventional. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "RCS",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Conventional and Social. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "REC",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Enterprising and Conventional. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "RCE",
    desc: "As per your 3 point code, your dominant personality type is Realistic, followed by Conventional and Enterprising. An individual who is of the Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "IAS",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Artistic and Social. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Artistic type demonstrates a strong preference for expression and originality. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ISA",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Social and Artistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "IAE",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Artistic and Enterprising. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "IEA",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Enterprising and Artistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "IAC",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Artistic and Conventional. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ICA",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Conventional and Artistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Conventional type shows a preference for situations that are organized and predictable. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "IAR",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Artistic and Realistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Artistic type demonstrates a strong preference for expression and originality. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "IRA",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Realistic and Artistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "ISE",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Social and Enterprising. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Social type represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "IES",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Enterprising and Social. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by Social type which represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ISC",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Social and Conventional. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Social type demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ICS",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Conventional and Social. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Social type which demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ISR",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Social and Realistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Social type demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "IRS",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Realistic and Social. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by Social type which demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "IEC",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Enterprising and Conventional. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ICE",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Conventional and Enterprising. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "IER",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Enterprising and Realistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "IRE",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Realistic and Enterprising. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "ICR",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Conventional and Realistic. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "IRC",
    desc: "As per your 3 point code, your dominant personality type is Investigative, followed by Realistic and Conventional. An individual who is of the Investigative type indicates an analytical orientation, wherein they enjoy drawing conclusions from systematic and objective observations. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ASE",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Social and Enterprising. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.. The adjacent Social type represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "AES",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Enterprising and Social. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by Social type which represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ASC",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Social and Conventional. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.. The adjacent Social type represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ACS",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Conventional and Social. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ASR",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Social and Realistic. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Social type represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "ARS",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Realistic and Social. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by Social type which demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ASI",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Social and Investigative. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Social type denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "AIS",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Investigative and Social. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "AEC",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Enterprising and Conventional. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ACE",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Conventional and Enterprising. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "AER",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Enterprising and Realistic. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "ARE",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Realistic and Enterprising. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "AEI",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Enterprising and Investigative. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "AIE",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Investigative and Enterprising. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "ACR",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Conventional and Realistic. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "ARC",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Realistic and Conventional. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ACI",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Conventional and Investigative. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "AIC",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Investigative and Conventional. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ARI",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Realistic and Investigative. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "AIR",
    desc: "As per your 3 point code, your dominant personality type is Artistic, followed by Investigative and Realistic. An individual who is of the Artistic type thrives on being expressive and original. They tend to be unconventional and deeply sensitive to personal feelings, thoughts and ideas.The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "SEC",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Enterprising and Conventional. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "SCE",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Conventional and Enterprising. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "SER",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Enterprising and Realistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "SRE",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Realistic and Enterprising. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "SEI",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Enterprising and Investigative. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "SIE",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Investigative and Enterprising. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "SEA",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Enterprising and Artistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Artistic type which indicates a strong preference for expression and originality.",
  },
  {
    name: "SAE",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Artistic and Enterprising. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "SCR",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Conventional and Realistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "SRC",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Realistic and Conventional. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "SCI",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Conventional and Investigative. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "SIC",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Investigative and Conventional. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "SCA",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Conventional and Artistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "SAC",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Artistic and Conventional. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "SRI",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Realistic and Investigative. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "SIR",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Investigative and Realistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "SRA",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Realistic and Artistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "SAR",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Artistic and Realistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Artistic type demonstrates a strong preference for expression and originality. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "SIA",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Investigative and Artistic. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by the Artistic type which prefers expression and originality.",
  },
  {
    name: "SAI",
    desc: "As per your 3 point code, your dominant personality type is Social, followed by Artistic and Investigative. An individual who is of the Social type is strongly oriented to human interactions, and is generally sensitive to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. The adjacent Artistic type thrives on expression and originality. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "ECR",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Conventional and Realistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Conventional type signifies a preference for situations that are organized and predictable. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "ERC",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Realistic and Conventional. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ECI",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Conventional and Investigative. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "EIC",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Investigative and Conventional. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ECA",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Conventional and Artistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "EAC",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Artistic and Conventional. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Conventional type which are drawn towards situations that are organized and predictable.",
  },
  {
    name: "ECS",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Conventional and Social. An individual who is of the Enterprising type is typically self-driven, and would enjoy organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Conventional type indicates a preference for situations that are organized and predictable. Followed by the Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ESC",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Social and Conventional. An individual who is of the Enterprising type is typically self-driven, and would enjoy organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Conventional type signifying a preference for situations that are organized and predictable.",
  },
  {
    name: "ERI",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Realistic and Investigative. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "EIR",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Investigative and Realistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "ERA",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Realistic and Artistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "EAR",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Artistic and Realistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Artistic type demonstrates a strong preference for expression and originality. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "EIA",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Investigative and Artistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by the Artistic type which prefers expression and originality.",
  },
  {
    name: "EAI",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Artistic and Investigative. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Artistic type thrives on expression and originality. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "ERS",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Realistic and Social. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by Social type which portrays sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ESR",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Social and Realistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Social type demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "EIS",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Investigative and Social. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ESI",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Social and Investigative. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Social type denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "EAS",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Artistic and Social. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "ESA",
    desc: "As per your 3 point code, your dominant personality type is Enterprising, followed by Social and Artistic. An individual who is of the Enterprising type usually demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Artistic type which portrays a strong preference for expression and originality.",
  },
  {
    name: "CRI",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Realistic and Investigative. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Investigative type which demonstrates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "CIR",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Investigative and Realistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Investigative type indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "CRA",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Realistic and Artistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "CAR",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Artistic and Realistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Artistic type demonstrates a strong preference for expression and originality. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "CSR",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Social and Realistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Social type represents sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "CRS",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Realistic and Social. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by Social type which demonstrates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "CRE",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Realistic and Enterprising. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Realistic type is most comfortable being involved in activities that are concrete and based on clearly defined systems and norms. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "CER",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Enterprising and Realistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Enterprising type denotes a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Realistic type which are inclined towards activities that are concrete and based on clearly defined systems and norms.",
  },
  {
    name: "CIA",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Investigative and Artistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by the Artistic type which prefers expression and originality.",
  },
  {
    name: "CAI",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Artistic and Investigative. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Artistic type thrives on expression and originality. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "CIS",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Investigative and Social. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "CSI",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Social and Investigative. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Social type denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "CIE",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Investigative and Enterprising. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Investigative type is analytical in orientation and enjoys drawing conclusions from systematic and objective observations. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "CEI",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Enterprising and Investigative. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Investigative type which indicates an analytical orientation, wherein an individual enjoys drawing conclusions from systematic and objective observations.",
  },
  {
    name: "CAS",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Artistic and Social. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
  {
    name: "CSA",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Social and Artistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Artistic type which demonstrates a strong preference for expression and originality.",
  },
  {
    name: "CAE",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Artistic and Enterprising. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Artistic type indicates a strong preference for expression and originality. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "CEA",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Enterprising and Artistic. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by the Artistic type which indicates a strong preference for expression and originality.",
  },
  {
    name: "CSE",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Social and Enterprising. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Social type indicates sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour. Followed by the Enterprising type which demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets.",
  },
  {
    name: "CES",
    desc: "As per your 3 point code, your dominant personality type is Conventional, followed by Enterprising and Social. An individual who is of the Conventional type finds comfort in situations that are organised and predictable, and prefer to engage themselves in activities that are routine and repetitive. The adjacent Enterprising type demonstrates a self-driven personality, with a preference for organizing people, objects and resources to create systems and structures for the attainment of goals and targets. Followed by Social type which denotes sensitivity to human needs, nuances of emotions, thinking patterns and other aspects of human behaviour.",
  },
];
const TopCareer: React.FC<TopCareerProps> = ({ topCategories }) => {
  const formattedTopCategories = topCategories
    .map(cat => cat.charAt(0).toUpperCase())
    .join('');
  const newScoreArry = company_data.filter(itm => itm.name === formattedTopCategories);
  return (
    <section className="top-company-section rounded-5 mt-3" style={{ backgroundColor: "#13adbd" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="title-one">
            <h2 className="main-font wow fadeInUp text-white text-uppercase mt-3"
                data-wow-delay="0.3s"
                style={{ fontSize: "18px", fontWeight: "bold" }}>
              Personality Traits According To Your Score
            </h2>
          </div>
        </div>
        <div className="container-fluid p-2 d-flex justify-content-around align-items-center flex-wrap" style={{ marginBottom: '60px' }}>
          {newScoreArry.length > 0 ? (
            newScoreArry.map(item => (
              <div key={item.name} className="col-lg-12 col-md-12 col-sm-12 mb-4">
                <div className="card-style-nine text-center tran2s wow fadeInUp rounded-5">
                <h2
                  className="mt-2"
                  style={{
                    fontSize: "23px",
                    color: 'green'
                  }}
                >
                 3 Point Code: <span style={{ fontStyle: 'italic' }}>{formattedTopCategories}</span>
                </h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white" style={{'fontSize': '17px', 'fontWeight': 'bold'}}>Interpretation not found for the code: {formattedTopCategories}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCareer;
