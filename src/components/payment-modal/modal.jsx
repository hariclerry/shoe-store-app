import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  useDialog,
  ModalContent,
  ModalFooter,
  ModalButton
} from "react-st-modal";

import FormInput from "components/form-input/input";

const PaymentModal = ({ total, cartItems }) => {
  const dialog = useDialog();

  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    billingInfo: "",
    creditCardNumber: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const { name, billingInfo, creditCardNumber } = paymentDetails;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && billingInfo && creditCardNumber) {
      // if we were making api requests it would be here user details, cartItems and total amount
      dialog.close();
      toast.success(`Payment was Successful, ${name}`);
      setPaymentDetails({
        name: "",
        billingInfo: "",
        creditCardNumber: "",
      });
    }
  };
  return (
    <div>
      <ModalContent>
        <FormInput
          name="name"
          type="text"
          handleChange={(e) => {
            handleChange(e);
          }}
          value={name}
          label="Name"
          required
        />
        <FormInput
          name="billingInfo"
          type="text"
          handleChange={(e) => {
            handleChange(e);
          }}
          value={billingInfo}
          label="Billing Address"
          required
        />
        <FormInput
          name="creditCardNumber"
          type="number"
          handleChange={(e) => handleChange(e)}
          value={creditCardNumber}
          label="Credit Card Number"
          required
        />
        <div>Total Amount: ${total}</div>
      </ModalContent>
      <ModalFooter>
        <ModalButton
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </ModalButton>
        <ModalButton
          onClick={() => {
            dialog.close();
          }}
        >
          Cancel
        </ModalButton>
      </ModalFooter>
    </div>
  );
};

export default PaymentModal;
