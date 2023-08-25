import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="p-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <Link to={`/shop/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-2">
        Order Now
      </button></Link>
    </div>
  );
};

export default MenuCategory;
