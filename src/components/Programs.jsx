import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import "./items.css";

const Programs = () => {
  return (
    <section id="programs" className="programs">
      <div id="vueBind" className="containerItem">
        {programs.map(({ id, image, title, info, path }) => {
          return (
            <Link to={`/programs/${id}`} key={id}>
              <Card>
                <div className="imgBox">
                  <img src={image} alt="datatitle" />
                </div>
                <div className="content">
                  <div className="contentBox">
                    <h4>{title}</h4>
                    <p>{info}</p>
                  </div>
                  <div className="social">
                    <Link to={`/programs/${id}`} className="btn sm">
                      Ver más <AiFillCaretRight />
                    </Link>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
