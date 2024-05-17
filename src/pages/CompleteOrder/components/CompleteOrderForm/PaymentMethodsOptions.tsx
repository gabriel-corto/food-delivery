import { PaymentMethodsInput } from "../PaymentMethodsInput";

export function PaymentMethodsOptions() {
  return(
    <div className="payment-methods-options-container">
      <PaymentMethodsInput />
      <PaymentMethodsInput />
      <PaymentMethodsInput />
    </div>
  )
}