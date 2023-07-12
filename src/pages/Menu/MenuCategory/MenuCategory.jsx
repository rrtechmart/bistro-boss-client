import { Link } from "react-router-dom";
import Cover from "../../../Share/Cover/Cover";
import MenuItems from "../../../Share/MenuItems/MenuItems";


const MenuCategory = ({ items, img, title }) => {
    return (
        <div className="py-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 py-8'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <Link to={`/order/${title}`}>
                <button className="btn btn-outline text-black border-0 border-b-4 my-8"> Order Now </button>
            </Link>

        </div>
    );
};

export default MenuCategory;