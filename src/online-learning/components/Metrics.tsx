import Image from "next/image";

const colleges = [
  { name: "D.Y. Patil University", src: "/assets/images/college/DY-Patil.logo.png" },
  { name: "Alliance University", src: "/assets/images/college/aalliance.logo.png" },
  { name: "Amity University", src: "/assets/images/college/amity.logo.png" },
  { name: "Bennett University", src: "/assets/images/college/bennett.logo.png" },
  { name: "BIMTECH", src: "/assets/images/college/bimtech.logo.png" },
  { name: "Chandigarh University", src: "/assets/images/college/chandigarh.logo.png" },
  { name: "GLA University", src: "/assets/images/college/gla.logo.png" },
  { name: "Graphic Era University", src: "/assets/images/college/graphic-era.logo.png" },
  { name: "IMT CDL", src: "/assets/images/college/imt.logo.png" },
  { name: "O.P. Jindal Global University", src: "/assets/images/college/jindal.logo.png" },
  { name: "Lingaya's Vidyapeeth", src: "/assets/images/college/lingayas.logo.png" },
  { name: "Lovely Professional University", src: "/assets/images/college/lpu.logo.png" },
  { name: "Manipal University", src: "/assets/images/college/manipal.logo.png" },
  { name: "NMIMS", src: "/assets/images/college/nmims.logo.png" },
  { name: "Parul University", src: "/assets/images/college/parul.logo.png" },
  { name: "Shoolini University", src: "/assets/images/college/shoolini.logo.png" },
  { name: "Sikkim Manipal University", src: "/assets/images/college/smu.logo.png" },
  { name: "Uttaranchal University", src: "/assets/images/college/uttaranchal.logo.png" },
  { name: "Vivekananda Global University", src: "/assets/images/college/vgu.logo.png" },
  { name: "VIT University", src: "/assets/images/college/vit.logo.png" },
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
