import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const CheckoutForm = () => {

    const [error, setError] = useState('');

   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = useAxiosSecure(); 

   useEffect(() =>{
     axiosSecure.post('/create-payment-intent')
   }, [axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }
        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message);
        }
        else{
            console.log('payment method', paymentMethod)
            setError('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className=" text-red-600">{error}</p>
    </form>
    );
};

export default CheckoutForm;