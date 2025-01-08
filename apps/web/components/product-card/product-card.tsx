import {
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "../../uniform/models";
import { ProductCard } from "ds-ui/product-card";
import { CheckCircleIcon } from "ds-ui/icons";
import Link from "next/link";

export const ProductCardComponent = ({
  title,
  price,
  actionLabel,
  terms,
  url,
  features,
  imgurl,
}: ComponentProps<ProductCardProps>) => {
  const featureItems = Array.isArray(features) ? features.map((feature) => ({
    icon: <CheckCircleIcon />,
    description: feature.fields.text.value,
  })) : ["Feature 1", "Feature 2", "Feature 3"].map((feature) => ({
    icon: <CheckCircleIcon />,
    description: feature,
  }));

  const imgSrc = Array.isArray(imgurl) ? imgurl[0]?.fields?.url?.value : '';

  return (
    <>
      {url ? (
        <Link href={url}>
          <ProductCard
            title={title}
            pricePerMonth={price}
            features={featureItems}
            buttonLabel={actionLabel}
            footerText={terms}
            badgeText="Popular"
            imgUrl={imgSrc}
          />
        </Link>
      ) : (
        <ProductCard
          title={title}
          pricePerMonth={price}
          features={featureItems}
          buttonLabel={actionLabel}
          footerText={terms}
          badgeText="Popular"
          imgUrl={imgSrc}
        />
      )}
    </>
  );
};

type Block = {
  type: string;
  value: string;
};

type FeatureItem = {
  type: string;
  fields: {
    icon: Block;
    text: Block;
  }
}

export type ProductCardProps = {
  title: string;
  price: string;
  actionLabel: string;
  terms: string;
  url: string;
  features: FeatureItem[];
  imgurl: any[];
};

export const productCardMapping: ResolveComponentResultWithType = {
  type: "productCard",
  component: ProductCardComponent,
};
