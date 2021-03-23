import { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption";
import ToopingOption from "./ToopingOption";
import Row from "react-bootstrap/Row";
import AlertBanner from "../common/AlertBanner";
import { pricePerItem } from "../../constents";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDetails, updateItemCount] = useOrderDetails();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToopingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  if (error) return <AlertBanner />;

  return (
    <>
        <h2>{title}</h2>
        <p>{pricePerItem[optionType]} each</p>
        <p>{title} total: {orderDetails.totals[optionType]}</p>
      <Row>
        {optionItems}
      </Row>
    </>
  );
}
