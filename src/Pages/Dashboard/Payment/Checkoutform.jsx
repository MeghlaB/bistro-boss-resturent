import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

export default function Checkoutform() {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }

        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('payment error',error)
        }
        else {
            console.log('payment message', paymentMethod);
        }
    }
    return (
        <div>
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
                ></CardElement>
                <button className='btn btn-primary my-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    )
}
