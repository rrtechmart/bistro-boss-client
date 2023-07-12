import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../../Share/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item =>item.category === 'popular')
    
    return (
        <section className='mb-4 text-center'>
            <SectionTitle
            subHeading={'Popular items'}
            heading={'From Our Menu'}
            ></SectionTitle>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
            </div>

            <button className="btn btn-outline text-black border-0 border-b-4 my-8"> View Full Menu </button>
            
        </section>
    );
};

export default PopularMenu;