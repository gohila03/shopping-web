import React from 'react';
import { loadRazorpay } from '../utils/Helper';

const RazorpayPayment = ({ totalAmount }) => {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    
    if (!res) {
      alert("Razorpay SDK failed to load. Check your network connection.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID from your dashboard
      amount: totalAmount * 100, // Amount in paise (multiply by 100)
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Replace with your logo
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          console.log("Payment modal closed by user");
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response) {
      console.error("Payment failed with error:", response.error);
      alert(`Payment failed! Reason: ${response.error.description}`);
    });
  };

  return (
    <div>
      <h2>Razorpay Payment Gateway</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default RazorpayPayment;
