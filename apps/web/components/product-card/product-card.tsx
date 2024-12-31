import {
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "../../uniform/models";
import { ProductCard } from "ds-ui/product-card";
import { CheckCircleIcon } from "ds-ui/icons";

export const ProductCardComponent = ({
  component,
  context,
  title,
  price,
  actionLabel,
  terms,
}: ComponentProps<ProductCardProps>) => {

    const features = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
    ].map((feature) => ({
        icon: <CheckCircleIcon/>,
        description: feature,
      }));
    
  return (
    <>
      <ProductCard
        title={title}
        pricePerMonth={price}
        features={features}
        buttonLabel={actionLabel}
        footerText={terms}
        badgeText="Popular"
      />
    </>
  );
};

export type ProductCardProps = {
  title: string;
  price: string;
  actionLabel: string;
  terms: string;
};

export const productCardMapping: ResolveComponentResultWithType = {
  type: "productCard",
  component: ProductCardComponent,
};
