import Container from "react-bootstrap/Container";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OrderEntry";
import OrderSummary from './pages/entry/OrderSummary';
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import { useState } from "react";
function App() {

  const [orderphase, setorderPhase] = useState('inProgress');

  let Component = OrderEntry;
  switch(orderphase){
    case 'inProgress':
      component = OrderEntry;
      break;
    case 'review':
      component = OrderSummary;
      break;
    case 'completed':
      component = OrderConfirmation;
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
