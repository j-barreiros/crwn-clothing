// React Router
import { Route, Routes} from "react-router";

// Routes
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/auth/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckoutPage from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}/>
        <Route path="authentication" element={<Authentication />}/>
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
