import React from 'react';
import {useOrderDetails} from '../../contexts/OrderDetails';

export default function OrderSummary({setOrderPhase}){
    const [orderDetails] = useOrderDetails();

    const scoopArray = Array.from(orderDetails.scoops.entries());
    const scoopList = scoopArray.map(([key,value])=>(
        <li key={key}>
            {value} {key}
        </li>
    ));
    const toppingArray = Array.from(orderDetails.topping.entries());
    const toppingList = toppingArray.map(key=>(
        <li key={key}>
            {key}
        </li>
    ));

    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Scoops: {orderDetails.totals.scoops}</h2>
            <ul>{scoopList}</ul>
            <h2>Toppings: {orderDetails.totals.toppings}</h2>
            <ul>{toppingList}</ul>
            <OrderSummary setOrderPhase={setOrderPhase}/>
        </div>
    )
}
