import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user}= useContext(AuthContext);
    const [ , refetch]=useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item =>{
        console.log(item);
        if(user && user.email){
            const cardItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cardItem)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    refetch(); //refetch cart to update the number of item
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your food order has been placed',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from: location} });
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-6 rounded-sm px-2">${price} </p>
            <div className="card-body">
                <h2 className="card-title"> {name} </h2>
                <p> {recipe} </p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-yellow-400 text-black border-0 border-b-4 my-8"> Add to Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;