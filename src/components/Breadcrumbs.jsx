import { Link } from "react-router-dom";
import "../css/Breadcrumbs.css";

function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Brödsmulor" className="breadcrumbs">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={isLast ? "current" : ""}>
              {item.to && !isLast ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
