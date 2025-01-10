
import { ResolveComponentResultWithType } from '../../uniform/models';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import './checkout.css';

const CheckoutComponent = ({
  component,
  context,
  slots,
  cartTotal,
}: ComponentProps<ContentContainerProps>) => {
  return (
    <div className="checkout-container brand-1 light desktop default">
      <div className="checkout-content">
        <div className="payment-section">
          <div className="card">
            <div className="card-header">
              <h2>Payment Information</h2>
            </div>
            <div className="card-content">
              <form>
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                    />
                  </div>
                </div>
                <button type="submit" className="submit-button">
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="summary-section">
          <div className="card">
            <div className="card-header">
              <h2>Order Summary</h2>
            </div>
            <div className="card-content">
            <div className="summary-items">
                    <UniformSlot
                      context={context}
                      data={component}
                      slot={slots.cartItem}
                    />
                  </div>
                  <div className="summary-total">
                    <p>Total</p>
                    <p>{cartTotal}</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type ContentContainerProps = ComponentProps<
  {
    cartTotal: string;
  },
  CheckoutSlots
>;
type CheckoutSlots = "cartItem";

export const checkoutMapping: ResolveComponentResultWithType = {
  type: "checkout",
  component: CheckoutComponent,
};