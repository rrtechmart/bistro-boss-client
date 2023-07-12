import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO load data from server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side bg-[#D1A054] mr-40">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full  text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li> <NavLink to='/dashboard/home'> <FaHome></FaHome> Admin Home</NavLink>  </li>
                            <li> <NavLink to='/dashboard/addItem'> <FaUtensils></FaUtensils> Add an Item </NavLink>  </li>
                            <li> <NavLink to='/dashboard/manageItems'> <FaWallet></FaWallet> Manage Items </NavLink>  </li>
                            <li> <NavLink to='/dashboard/history'> <FaBook></FaBook> Manage Bookings </NavLink>  </li>
                            <li> <NavLink to='/dashboard/allusers'> <FaUsers></FaUsers> All Users </NavLink>  </li>
                            
                        </> : <>
                            <li> <NavLink to='/dashboard/home'> <FaHome></FaHome> User Home</NavLink>  </li>
                            <li> <NavLink to='/dashboard/reservation'> <FaCalendarAlt></FaCalendarAlt> Reservations </NavLink>  </li>
                            <li> <NavLink to='/dashboard/history'> <FaWallet></FaWallet> Payment History</NavLink>  </li>
                            <li> <NavLink to='/dashboard/myCart'> <FaShoppingCart></FaShoppingCart>
                                MyCart
                                <span className="badge badge-secondary"> +{cart?.length || 0} </span>
                            </NavLink></li>
                        </>
                    }



                    <div className="divider"> </div>

                    <li> <NavLink to='/'> <FaHome></FaHome> Home</NavLink>  </li>
                    <li> <NavLink to='/menu'> Menu </NavLink></li>
                    <li> <NavLink to='/order/salad'> Order </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;