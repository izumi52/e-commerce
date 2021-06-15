import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IzcSpDqqcb2IvmVywuvorecvzeMA4caQIDJPHH7J7YyWIFQFRE9yVmCY8RghGsdPQpWGeWJl8u8Cchs3fB3vET800ITHGgIXz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Izumi e-commerce Test'
            billingAddress
            shippingAddress
            //image='https://sendeyo.com/en/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
} 

export default StripeButton;