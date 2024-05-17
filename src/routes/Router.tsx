import { App } from "../App";
import { HomePage } from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { CompletedOrderPage } from "../pages/CompleteOrder";
import { OrderConfirmedPage } from "../pages/OrderConfirmed";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/completedOrder",
        element: <CompletedOrderPage />
      },
      {
        path: "/orderConfirmed",
        element: <OrderConfirmedPage />
      }
    ]
  }
])