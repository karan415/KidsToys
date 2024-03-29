import { FaEdit, FaTrash } from "react-icons/fa";
import teddy from './images/pinkteddy.png';
import teddy2 from './images/yellow_teddy.jpg';
import teddy3 from './images/tedddy_red.png'
import teddy4 from './images/redteddy2.png'

const CartData = [
    {
        id: 0,
        img: teddy,
        item: "PLUSH PIG 30 CM",
        price: "$20.00",
        quantity: {
            less: '-',
            more: "+",
            items: "1",
        },
        subtotal: "$20.00",
        action: {
            edit: <FaEdit />,
            deleteitem: <FaTrash />
        },
    },
    {
        id: 1,
        img: teddy2,
        item: "PLUSH PIG 30 CM",
        price: "$24.54",
        quantity: {
            less: '-',
            more: "+",
            items: "1",
        },
        subtotal: "$24.54",
        action: {
            edit: <FaEdit />,
            deleteitem: <FaTrash />
        },
    },
    {
        id: 2,
        img: teddy3,
        item: "PLUSH PIG 30 CM",
        price: "$21",
        quantity: {
            less: '-',
            more: "+",
            items: "1",
        },
        subtotal: "$21",
        action: {
            edit: <FaEdit />,
            deleteitem: <FaTrash />
        },
    },
    {
        id: 3,
        img: teddy4,
        item: "PLUSH PIG 30 CM",
        price: "$78",
        quantity: {
            less: '-',
            more: "+",
            items: "1",
        },
        subtotal: "$78",
        action: {
            edit: <FaEdit />,
            deleteitem: <FaTrash />
        },
    },
    {
        id: 4,
        img: teddy,
        item: "PLUSH PIG 30 CM",
        price: "$23",
        quantity: {
            less: '-',
            more: "+",
            items: "1",
        },
        subtotal: "$23",
        action: {
            edit: <FaEdit />,
            deleteitem: <FaTrash />
        },
    },
]
export default CartData