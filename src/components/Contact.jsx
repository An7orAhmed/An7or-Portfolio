import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section className="py-14 lg:py-10" id="contact">
      <div data-aos="fade-left" className="card flex-row items-center gap-3 glass rounded-full py-2 px-10 w-fit uppercase">
        <FaEnvelope></FaEnvelope>
        <a href="#contact">Contact</a>
      </div>
      <h1 data-aos="zoom-in-up" className="text-2xl lg:text-5xl py-12 font-light tracking-widest">
        Let&apos;s Work <span className="text-secondary">Together!</span>
      </h1> 
    </section>
  );
}

export default Contact;