import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="w-full mt-60">
            <Helmet>
                <title> Bistro Boss | MyCart </title>
            </Helmet>

            <div className="uppercase flex font-semibold h-[60px] justify-evenly items-center">
                <h3 className="text-2xl">Total Orders: {cart.length} </h3>
                <h3 className="text-2xl mx-6">Total Price: ${total} </h3>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">Pay</button>
                </Link>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td> {index} </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td> {item.name} </td>
                                <td className="text-end"> ${item.price} </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white btn-sm text-base"> <FaTrash></FaTrash> </button>
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyCart;