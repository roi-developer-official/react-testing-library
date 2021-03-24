import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from './pages/summary/OrderSummary';
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { useState } from "react";
function App() {

  const [orderphase, setorderPhase] = useState('inProgress');

  let Component = OrderEntry;
  switch(orderphase){
    case 'inProgress':
      Component = OrderEntry;
      break;
    case 'review':
      Component = OrderSummary;
      break;
    case 'completed':
      Component = OrderConfirmation;
      break;
      default: 
  }
  
  return (
    <OrderDetailsProvider>
        <Container>
          {<Component setorderPhase={setorderPhase}/>}
    </Container>
      </OrderDetailsProvider>
  );
}

export default App;
