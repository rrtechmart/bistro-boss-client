import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './FeaturedItem.css';

const FeaturedItem = () => {
    return (
        <div className="featured-item bg-fixed pt-6 mb-10">
            <SectionTitle
            subHeading={'check out'}
            heading={"Featured Item"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-6 p-10 items-center pb-20 bg-slate-500 opacity-60 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>

                <div className="text-white">
                    <p>May 26, 2023</p>
                    <h3 className="uppercase text-3xl">When can I get sime</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aut sunt quos a dolore mollitia adipisci recusandae voluptate animi ut! Consequatur ullam veniam saepe! Minus et consequuntur molestias animi assumenda.</p>

                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now </button>

                </div>
            </div>
            
        </div>
    );
};

export default FeaturedItem;