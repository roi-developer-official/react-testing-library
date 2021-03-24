import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { pricePerItem } from "../constents";
import { formatCurrency } from '../utils';


function calaulateSubTotal(orderType, optionCounts) {
    let optionCount = 0;
  
    for (const count of optionCounts[orderType].values()) {
      optionCount += count;
    }
  
    return optionCount * pricePerItem[orderType];
  }

const OrderDetails = createContext();
function useOrderDetails() {
  const context = useContext(OrderDetails);

  if (!context) {
    throw new Error("useOrderDetails must implement OrderDetails context");
  }
  return context;
}

function OrderDetailsProvider(props) {

  const [optionCount, setOptionCount] = useState({
    scoops: new Map(),
    toppings: new Map(),
  });

  const zeroCurrency = formatCurrency(0);
  const [totals, setTotals] = useState({
    scoops:zeroCurrency,
    toppings:zeroCurrency,
    grandTotal:zeroCurrency
  });

  useEffect(() => {
    const scoopsTotal = calaulateSubTotal("scoops", optionCount);
    const toppingsTotal = calaulateSubTotal("toppings", optionCount);

    const grandTotal = scoopsTotal + toppingsTotal;
    setTotals({
      scoops: formatCurrency(scoopsTotal),
      toppings: formatCurrency(toppingsTotal),
      grandTotal: formatCurrency(grandTotal),
    });
  }, [optionCount]);
  const value = useMemo(() => {
    //setter
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCount = { ...optionCount };
      const optionTypeMap = optionCount[optionType];
      optionTypeMap.set(itemName, parseInt(newItemCount));
      setOptionCount(newOptionCount);
      
    }

    return [{ ...optionCount, totals }, updateItemCount];
  }, [optionCount, totals]);


  return <OrderDetails.Provider value={value} {...props} />;
}

export { OrderDetailsProvider, useOrderDetails };
