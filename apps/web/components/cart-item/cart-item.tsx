import { ResolveComponentResultWithType } from '../../uniform/models';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import './cart-item.css';

const CartItemComponent = ({
    component,
    context,
    name,
    price,
    quantity,
  }: ComponentProps<CartItemComponentProps>) => {
  return (
    <div className="summary-item">
    <div className="item-info">
      <p className="item-name">{name}</p>
      <p className="item-quantity">Quantity: {quantity}</p>
    </div>
    <p className="item-price">${(price * quantity).toFixed(2)}</p>
  </div>
  );
};

export type CartItemComponentProps = ComponentProps<
  {
    name: string;
    price: number;
    quantity: number;
  }
>;

export const cartItemMapping: ResolveComponentResultWithType = {
  type: "cartItem",
  component: CartItemComponent,
};