// PaymentComponent.jsx
import React, { useEffect } from 'react';
// import KhaltiCheckout from 'khalti-checkout-web';
import KhaltiCheckout from 'khalti-checkout-web';
const Payment = () => {
  useEffect(() => {
    // Khalti configuration
    const config = {
      publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
      productIdentity: '1234567890',
      productName: 'Drogon',
      productUrl: 'http://gameofthrones.com/buy/Dragons',
      eventHandler: {
        onSuccess: async(payload) => {
          // Hit merchant API for initiating verification
          // console.log(payload);
          try {
            const response = await axios.post('http://localhost:3000/transaction/verify', {
              token: payload.token,
              amount: payload.amount,
            });
        
            // Handle the response from the backend as needed
            console.log(response.data);
          } catch (error) {
            // Handle errors
            console.error(error);
          }
        },
        onError: (error) => {
          // Handle errors
          console.log(error);
        },
        onClose: () => {
          console.log('Widget is closing');
        },
      },
      paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
    };

    // Initialize Khalti checkout
    const checkout = new KhaltiCheckout(config);

    // Get the button element by ID
    const paymentButton = document.getElementById('payment-button');

    // Add click event listener to the button
    paymentButton.addEventListener('click', () => {
      // Minimum transaction amount must be 10 (i.e., 1000 in paisa)
      checkout.show({ amount: 1000 });
    });

    // Cleanup event listener on component unmount
    return () => {
      paymentButton.removeEventListener('click', () => {
        checkout.show({ amount: 1000 });
      });
    };
  }, []); // Ensure that this effect runs only once during component mount

  return (
    <div>
      <button id="payment-button">Pay with Khalti</button>
    </div>
  );
};
export default Payment;
