import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method:'PATCH',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now !`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = user => {

    }



    return (
        <div className="w-full">
            <Helmet>
                <title> Bistro Boss | All Users </title>
            </Helmet>

            <h1 className="text-3xl font-semibold my-4"> Total Users: {users.length} </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th> {index} </th>
                                <td> {user?.name} </td>
                                <td> {user?.email} </td>

                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' :  <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-500 text-white btn-sm text-base"> <FaUserShield></FaUserShield> </button>
                                    }
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-sm text-base"> <FaTrash></FaTrash> </button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;