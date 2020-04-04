import React from 'react';
import InstructionSection from '../../components/InstructionSection';
import CartList from '../../components/CartList/CartList';

export default function CartPage() {
  return (
    <div className="cart-page">
      <InstructionSection />
      <CartList />
    </div>
  );
}
