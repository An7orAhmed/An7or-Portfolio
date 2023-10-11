import { BiSolidMessageAlt } from 'react-icons/bi';

function Testimonials() {
  return (
    <section className="py-14 lg:py-10" id="testimonials">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <BiSolidMessageAlt></BiSolidMessageAlt>
        <a href="#testimonials">Testimonials</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">
        Trusted by <span className="text-secondary">Hundered Clients</span>
      </h1> 
    </section>
  );
}

export default Testimonials;