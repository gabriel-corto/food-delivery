import { Input } from "../../../../components/Ui/Input";

export function AdressForm() {
  return(
    <div className="adress-form-container">
      <Input type="number" placeholder="CEP" id="cep"/>
      <Input type="text" placeholder="Rua" id="street" />
      <Input type="number" placeholder="Número" />
      <Input type="text" placeholder="Complemento" id="complement" />
      <Input type="text" placeholder="Bairro" />
      <Input type="text" placeholder="Cidade" />
      <Input type="text" placeholder="UF" />
    </div>
  )
}