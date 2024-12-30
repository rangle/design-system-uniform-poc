import { Button } from '../button';
import './discount-card.css';

type DiscountCardProps = {
  /** The discount amount to display */
  amount: string;
  /** The expiration date of the discount */
  expirationDate: string;
  /** Optional click handler for the button */
  onApply?: () => void;
  /** Optional button label */
  buttonLabel?: string;
}

/** Card component to display discount information */
export const DiscountCard = ({
  amount,
  expirationDate,
  onApply,
  buttonLabel = 'Apply',
}: DiscountCardProps) => {
  return (
    <div className="ds-discount-card">
      <div className="ds-discount-card__content">
        <div className="ds-discount-card__frame">
          <div className="ds-discount-card__discount">
            <div className="ds-discount-card__amount">{amount} discount</div>
            <div className="ds-discount-card__subtitle">Final trip fare</div>
          </div>
          <div className="ds-discount-card__divider"></div>
        </div>
        
        <div className="ds-discount-card__footer">
          <div className="ds-discount-card__date">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18ZM11 9.586V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V10C9 10.266 9.105 10.52 9.293 10.707L12.293 13.707C12.3857 13.8002 12.4958 13.8741 12.6171 13.9246C12.7385 13.9751 12.8686 14.001 13 14.001C13.1314 14.001 13.2615 13.9751 13.3829 13.9246C13.5042 13.8741 13.6143 13.8002 13.707 13.707C13.7999 13.6142 13.8737 13.504 13.924 13.3827C13.9743 13.2614 14.0002 13.1313 14.0002 13C14.0002 12.8687 13.9743 12.7386 13.924 12.6173C13.8737 12.496 13.7999 12.3858 13.707 12.293L11 9.586Z" fill="currentColor"/>
            </svg>
            <div className="ds-discount-card__expiration">Expires on {expirationDate}</div>
          </div>
          <Button variant="primary" size="small" label={buttonLabel} onClick={onApply} />
        </div>
      </div>
      
      <div className="ds-discount-card__info">
        <div>Valid for all service types</div>
      </div>
    </div>
  );
};
