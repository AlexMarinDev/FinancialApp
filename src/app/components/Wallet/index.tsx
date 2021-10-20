import React from 'react';
import Icon from '../Icon';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

type TPaymentOption = {
    id: number,
    cardHolder: string,
    cardNumber: string,
    processor: string
}

const Wallet = () => {
    const paymentsProcessors: TPaymentOption[] = [{
        id: 1,
        cardHolder: 'Alex',
        cardNumber: "1234 2431 4321 4324",
        processor: "stripe"
    }, {
        id: 2,
        cardHolder: 'John',
        cardNumber: "1234 2431 4321 4324",
        processor: "paypal"
    }, {
        id: 3,
        cardHolder: 'Sarah',
        cardNumber: "1234 2431 4321 4324",
        processor: "bank"
    }]

    return <div>
        <div className="card-list">
            {paymentsProcessors.map((payment: TPaymentOption, idx: number) => {
                return (<div className={'credit-card'} key={idx}>
                    <Icon {...{ icon: faCreditCard, size: 'sm', label: '', description: "" }}></Icon>
                    <div className="card-info">
                        <span className="card-number">{payment.cardNumber}</span>
                        <span className="card-holder">{payment.cardHolder}</span>
                    </div>
                    <div className="card-photo">
                    </div>
                </div>)
            })}
        </div>

    </div>
}
export default Wallet;