import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import OrderSummary from './pages/entry/OrderSummary';
function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry/>
        <OrderSummary></OrderSummary>
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
