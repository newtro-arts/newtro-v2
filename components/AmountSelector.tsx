import React from 'react';

interface AmountSelectorProps {
  amount: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
}

const AmountSelector: React.FC<AmountSelectorProps> = ({ amount, incrementAmount, decrementAmount }) => (
  <div className="flex items-center">
    <button
      onClick={incrementAmount}
      className="w-10 h-10 border flex items-center justify-center bg-fourth-green text-primary-dark text-3xl leading-none hover:bg-primary-dark hover:border hover:border-fourth-green hover:text-fourth-green"
    >
      +
    </button>
    <input
      className="w-10 h-10 text-center text-xl focus:outline-none border bg-fourth-green text-primary-dark hover:bg-primary-dark hover:border hover:border-fourth-green hover:text-fourth-green"
      placeholder={amount.toString()}      
    />
    <button
      onClick={decrementAmount}
      className="w-10 h-10 flex border items-center justify-center bg-fourth-green text-primary-dark text-3xl leading-none hover:bg-primary-dark hover:border hover:border-fourth-green hover:text-fourth-green"
    >
      -
    </button>
  </div>
);

export default AmountSelector;
