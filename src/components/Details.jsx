import { programs } from "../data";
import { useParams } from "react-router-dom";
import "./items.css";
import "./detail.css";

const Details = () => {
  const { id } = useParams();
  const items = programs.find((index) => {
    return index.id === parseInt(id);
  });
  return (
    <section id="details" className="programs">
      <div className="containerItem">
        <div class="container" key={items.id}>
          <article class="about__article">
            <div class="about__image">
              <img src={items.image} alt="datatitle" />
            </div>
            <div class="about__content">
              <h4 class="about__article-title">{items.title}</h4>
              <p>{items.desc}</p>
              <a href="#" class="btn btn-primary">
                Contactarme
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Details;
