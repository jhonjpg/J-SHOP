import { TYPES } from "./ShoppingAction";

export const shoppingInitial = {

    products: [{

            id: 1,
            image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/w_330,c_limit/5d032ee1-ba4e-476e-b21d-139696446179/free-metcon-4-training-shoes-LblJRQ.png",
            marca: "nike",
            edicion: "runner",
            price: 399

        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&w=800",
            marca: "adidas",
            edicion: "reopper",
            price: 200

        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/6685972/pexels-photo-6685972.jpeg?auto=compress&cs=tinysrgb&w=800",
            marca: "nike",
            edicion: "flug",
            price: 700

        },

        {
            id: 4,
            image: "https://images.pexels.com/photos/6965875/pexels-photo-6965875.jpeg?auto=compress&cs=tinysrgb&w=800",
            marca: "nike",
            edicion: "flug",
            price: 200

        },


        {
            id: 5,
            image: "https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg?auto=compress&cs=tinysrgb&w=800",
            marca: "nike",
            edicion: "flug",
            price: 200

        },


        {
            id: 6,
            image: "https://images.pexels.com/photos/13691720/pexels-photo-13691720.jpeg?auto=compress&cs=tinysrgb&w=800 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 7,
            image: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=800",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 8,
            image: "https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?auto=compress&cs=tinysrgb&w=800 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 9,
            image: "https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=800 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 10,
            image: "https://images.pexels.com/photos/13131618/pexels-photo-13131618.jpeg?auto=compress&cs=tinysrgb&w=800 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        }



    ],

    cart: []
};





export function shoppingReducer(state, action) {

    switch (action.type) {


        case TYPES.ADD_TO_CART:
            {



                let newitem = state.products.find((product) => product.id === action.payload)



                let itemCart = state.cart.find(item => item.id === newitem.id)



                console.log(newitem)



                return itemCart ? {
                    ...state,
                    cart: state.cart.map((item) => item.id === newitem.id ? {...item, quantity: item.quantity + 1 } : item)
                } : {
                    ...state,
                    cart: [...state.cart, {...newitem, quantity: 1 }],
                }


            }

        case TYPES.REMOVE_ONE_CART:
            {

            }

        case TYPES.REMOVE_ALL_CART:
            {

            }

        case TYPES.CLEAR_CART:
            {

            }

        default:
            return state;
    }


}