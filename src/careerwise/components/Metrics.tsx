import Image from "next/image";

const colleges = [
  { name: "D.Y. Patil University", src: "/assets/images/college/DY-Patil.logo.jpg" },
  { name: "Alliance University", src: "/assets/images/college/aalliance.logo.jpg" },
  { name: "Amity University", src: "/assets/images/college/amity.logo.jpg" },
  { name: "Bennett University", src: "/assets/images/college/bennett.logo.jpg" },
  { name: "BIMTECH", src: "/assets/images/college/bimtech.logo.png" },
  { name: "Chandigarh University", src: "/assets/images/college/chandigarh.logo.png" },
  { name: "GLA University", src: "/assets/images/college/gla.logo.jpg" },
  { name: "Graphic Era University", src: "/assets/images/college/graphic-era.logo.png" },
  { name: "IMT CDL", src: "/assets/images/college/imt.logo.jpg" },
  { name: "O.P. Jindal Global University", src: "/assets/images/college/jindal.logo.jpg" },
  { name: "Lingaya's Vidyapeeth", src: "/assets/images/college/lingayas.logo.jpg" },
  { name: "Lovely Professional University", src: "/assets/images/college/lpu.logo.jpg" },
  { name: "Manipal University", src: "/assets/images/college/manipal.logo.jpg" },
  { name: "NMIMS", src: "/assets/images/college/nmims.logo.jpg" },
  { name: "Parul University", src: "/assets/images/college/parul.logo.jpg" },
  { name: "Shoolini University", src: "/assets/images/college/shoolini.logo.jpg" },
  { name: "Sikkim Manipal University", src: "/assets/images/college/smu.logo.jpg" },
  { name: "Uttaranchal University", src: "/assets/images/college/uttaranchal.logo.jpg" },
  { name: "Vivekananda Global University", src: "/assets/images/college/vgu.logo.jpg" },
  { name: "VIT University", src: "/assets/images/college/vit.logo.jpg" },
] as const;

export default function Metrics() {
  return (
    <section className="metrics" id="universities" aria-labelledby="universities-heading">
      <h2 id="universities-heading">
        Our Partnered <span className="metricsAccent">Top Online Universities</span>
      </h2>
      <div className="logoViewport">
        <div className="logoTrack">
          {[...colleges, ...colleges].map((college, index) => (
            <div className="collegeLogoItem" key={`${college.name}-${index}`}>
              <Image
                src={college.src}
                alt={college.name}
                width={140}
                height={50}
                className="collegeLogoImg"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
