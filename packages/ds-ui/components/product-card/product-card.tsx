import './product-card.css';
import { Button } from '../button';

type ProductCardProps = {
  /** The title of the product */
  title: string;
  /** The price of the product per month */
  pricePerMonth: string;
  /** Array of features for the product */
  features: Array<{
    /** The icon component to display */
    icon: React.ReactNode;
    /** The feature description */
    description: string;
  }>;
  /** Optional click handler for the buy button */
  onBuy?: () => void;
  /** Optional button label */
  buttonLabel?: string;
  /** Optional footer text */
  footerText?: string;
  /** Optional badge text */
  badgeText?: string;
}

/** Card component to display product information */
export const ProductCard = ({
  title,
  pricePerMonth,
  features,
  onBuy,
  buttonLabel = 'Buy Now',
  footerText,
  badgeText,
}: ProductCardProps) => {
  return (
    <div className="ds-product-card">
      <div className="ds-product-card__header">
        <div className="ds-product-card__title-frame">
          <div className="ds-product-card__title">{title}</div>
          {badgeText && (
            <div className="ds-product-card__badge">{badgeText}</div>
          )}
        </div>
        <div className="ds-product-card__price">
          {pricePerMonth}
        </div>
        <div className="ds-product-card__features">
          {features.map((feature, index) => (
            <div key={index} className="ds-product-card__feature">
              {feature.icon}
              <div className="ds-product-card__feature-text">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ds-product-card__footer">
        <Button 
          variant="secondary" 
          label={buttonLabel}
          onClick={onBuy}
        />
        {footerText && (
          <div className="ds-product-card__footer-text">
            {footerText}
          </div>
        )}
      </div>
    </div>
  );
};
