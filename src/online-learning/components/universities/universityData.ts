export interface University {
  id: string;
  name: string;
  logo: string;
  coursesCount: number;
}

export const universitiesData: University[] = [
  { id: "amity", name: "Amity University Online", logo: "/assets/images/college/amity.logo.jpg", coursesCount: 14 },
  { id: "manipal", name: "Manipal University Online", logo: "/assets/images/college/manipal.logo.jpg", coursesCount: 12 },
  { id: "dy-patil", name: "DY Patil University Online", logo: "/assets/images/college/DY-Patil.logo.jpg", coursesCount: 6 },
  { id: "lpu", name: "LPU Online", logo: "/assets/images/college/lpu.logo.jpg", coursesCount: 13 },
  { id: "amrita", name: "Amrita University Online", logo: "/assets/images/college/amrita.logo.jpg", coursesCount: 8 },
  { id: "bimtech", name: "BIMTECH Online", logo: "/assets/images/college/bimtech.logo.png", coursesCount: 5 },
  { id: "chandigarh", name: "Chandigarh University Online", logo: "/assets/images/college/chandigarh.logo.png", coursesCount: 12 },
  { id: "lingayas", name: "Lingaya's Vidyapeeth", logo: "/assets/images/college/lingayas.logo.jpg", coursesCount: 6 },
  
  { id: "gla", name: "GLA University Online", logo: "/assets/images/college/gla.logo.jpg", coursesCount: 10 },
  { id: "liba", name: "LIBA", logo: "/assets/images/college/liba.logo.jpg", coursesCount: 6 },
  { id: "iiitb", name: "IIIT Bangalore", logo: "/assets/images/college/iiitb.logo.jpg", coursesCount: 10 },
  { id: "mica", name: "MICA", logo: "/assets/images/college/mica.logo.jpg", coursesCount: 3 },
  { id: "jindal", name: "OP Jindal Global University", logo: "/assets/images/college/jindal.logo.jpg", coursesCount: 9 },
  { id: "uttaranchal", name: "Uttaranchal University Online", logo: "/assets/images/college/uttaranchal.logo.jpg", coursesCount: 6 },
  { id: "shoolini", name: "Shoolini University Online", logo: "/assets/images/college/shoolini.logo.jpg", coursesCount: 11 },
  { id: "atlas", name: "Atlas SkillTech University", logo: "/assets/images/college/atlas.logo.jpg", coursesCount: 7 },
  
  { id: "imt", name: "IMT Ghaziabad", logo: "/assets/images/college/imt.logo.jpg", coursesCount: 7 },
  { id: "goa", name: "GIM", logo: "/assets/images/college/goa.logo.jpg", coursesCount: 6 },
  { id: "harappa", name: "Harappa School of Leadership", logo: "/assets/images/college/harappa.logo.png", coursesCount: 2 },
  { id: "upgrad", name: "UpGrad", logo: "/assets/images/college/up grad.logo.jpg", coursesCount: 11 },
  { id: "smu", name: "Sikkim Manipal University Online", logo: "/assets/images/college/smu.logo.jpg", coursesCount: 8 },
  { id: "madras", name: "IIT Madras", logo: "/assets/images/college/madras.jpg", coursesCount: 8 },
  { id: "parul", name: "Parul University Online", logo: "/assets/images/college/parul.logo.jpg", coursesCount: 9 },
  { id: "vgu", name: "Vivekananda Global University", logo: "/assets/images/college/vgu.logo.jpg", coursesCount: 7 },

  { id: "alliance", name: "Alliance University", logo: "/assets/images/college/aalliance.logo.jpg", coursesCount: 8 },
  { id: "amritsar", name: "IIM Amritsar", logo: "/assets/images/college/amritsar.logo.jpg", coursesCount: 5 },
  { id: "bennett", name: "Bennett University", logo: "/assets/images/college/bennett.logo.jpg", coursesCount: 4 },
  { id: "christ", name: "Christ University", logo: "/assets/images/college/christ.logo.jpg", coursesCount: 10 },
  { id: "gandhinagar", name: "IIT Gandhinagar", logo: "/assets/images/college/gandhinagar.logo.jpg", coursesCount: 7 },
  { id: "graphic-era", name: "Graphic Era University", logo: "/assets/images/college/graphic-era.logo.png", coursesCount: 6 },
  { id: "iim-kozhikode", name: "IIM Kozhikode", logo: "/assets/images/college/iim.kozhikode.logo.jpg", coursesCount: 9 },
  { id: "indore", name: "IIM Indore", logo: "/assets/images/college/indore.logo.jpg", coursesCount: 8 },

  { id: "jammu", name: "IIM Jammu", logo: "/assets/images/college/jammu.logo.jpg", coursesCount: 5 },
  { id: "jodhpur", name: "IIT Jodhpur", logo: "/assets/images/college/jodhpur.logo.jpg", coursesCount: 6 },
  { id: "kalinga", name: "Kalinga University", logo: "/assets/images/college/kalinga.logo.jpg", coursesCount: 12 },
  { id: "kharagpur", name: "IIT Kharagpur", logo: "/assets/images/college/khharagpur.jpg", coursesCount: 14 },
  { id: "mumbai", name: "Mumbai University", logo: "/assets/images/college/mumbai.logo.jpg", coursesCount: 10 },
  { id: "nagpur", name: "IIM Nagpur", logo: "/assets/images/college/nagpur.logo.jpg", coursesCount: 6 },
  { id: "nmims", name: "NMIMS Global", logo: "/assets/images/college/nmims.logo.jpg", coursesCount: 10 },
  { id: "raipur", name: "IIM Raipur", logo: "/assets/images/college/raipur.logo.jpg", coursesCount: 7 },

  { id: "roorkee", name: "IIT Roorkee", logo: "/assets/images/college/roorkee.logo.jpg", coursesCount: 8 },
  { id: "sanskrit", name: "Central Sanskrit University", logo: "/assets/images/college/sanskrit.logo.jpg", coursesCount: 3 },
  { id: "sirmaur", name: "IIM Sirmaur", logo: "/assets/images/college/sirmaur.logo.jpg", coursesCount: 4 },
  { id: "somaiya", name: "KJ Somaiya", logo: "/assets/images/college/somaiya.logo.jpg", coursesCount: 6 },
  { id: "visakhapatnam", name: "IIM Visakhapatnam", logo: "/assets/images/college/visakhapatnam.jpg", coursesCount: 5 },
  { id: "vit", name: "VIT Online", logo: "/assets/images/college/vit.logo.jpg", coursesCount: 11 },
  { id: "zell", name: "Zell Education", logo: "/assets/images/college/zell.logo.jpg", coursesCount: 2 }
];
