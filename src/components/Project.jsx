import { PropTypes } from 'prop-types';

const Project = ({ data }) => {
  const { title, description, tags, imgs, link } = data;

  return (
    <div data-aos="fade-right" className="card border-2 border-gray-500 h-full transition-all">
      <figure className="relative">
        {
          imgs && imgs.map((img, id) => <img key={id} onClick={() => window.open(img, '_blank')} className="h-52 w-full object-cover" src={img} />)
        }
        <div className="absolute flex flex-wrap gap-3 bottom-3 right-3">
          {
            tags && tags.map((tag, id) => <p key={id} className="py-2 px-4 bg-background opacity-50 hover:opacity-100 rounded-lg">{tag}</p>)
          }
        </div>
      </figure>
      <a href={link}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

Project.propTypes = {
  data: PropTypes.object
};

export default Project;