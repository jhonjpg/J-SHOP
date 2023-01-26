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

        },



        {
            id: 11,
            image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 12,
            image: "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 13,
            image: "https://images.pexels.com/photos/1698359/pexels-photo-1698359.jpeg?auto=compress&cs=tinysrgb&w=1600",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 14,
            image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 15,
            image: "https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 16,
            image: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 17,
            image: "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&w=1600",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 18,
            image: "https://images.pexels.com/photos/3281608/pexels-photo-3281608.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 19,
            image: "https://images.pexels.com/photos/225160/pexels-photo-225160.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            marca: "nike",
            edicion: "flug",
            price: 200

        },

        {
            id: 20,
            image: "https://images.pexels.com/photos/9993287/pexels-photo-9993287.jpeg?auto=compress&cs=tinysrgb&w=1600",
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