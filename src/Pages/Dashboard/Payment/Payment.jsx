import React from 'react'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
export default function Payment() {

  return (
    <div>
      <SectionTitle subHeadings={'Please pay to eat'} headings={'Payment'}></SectionTitle>
      <Elements stripe={stripePromise}>
        <Checkoutform></Checkoutform>
      </Elements>
    </div>
  )
}
