import {
  ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-next-rsc/component";
import { ResolveComponentResultWithType } from "../../uniform/models";
import Link from "next/link";
import { Product } from "./product";

export const ProductCardComponent = ({
  title,
  price,
  actionLabel,
  terms,
  url,
  features,
  imgurl,
}: ComponentProps<ProductCardProps>) => {
  return (
    <>
      {url ? (
        <Link href={url}>
          <Product
            title={title}
            price={price}
            features={features}
            actionLabel={actionLabel}
            terms={terms}
            imgurl={imgurl}
          />
        </Link>
      ) : (
        <Product
          title={title}
          price={price}
          features={features}
          actionLabel={actionLabel}
          terms={terms}
          imgurl={imgurl}
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
  };
};

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
