"use client";

import { ProductCard } from "ds-ui/product-card";
import { CheckCircleIcon } from "ds-ui/icons";

type Product = {
  id?: string;
  name: string;
  price: number;
};

const BASE_URL = "https://design-system-uniform-poc-murex.vercel.app/api";

export async function addToCart(product: Product) {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  console.log("add to cart", await res.json());
}

export const Product = ({
  title,
  price,
  actionLabel,
  terms,
  features,
  imgurl,
}) => {
  const featureItems = (
    Array.isArray(features) ? features : ["Feature 1", "Feature 2", "Feature 3"]
  ).map((feature) => ({
    icon: <CheckCircleIcon />,
    description: feature.fields?.text?.value || feature,
  }));

  const imgSrc =
    Array.isArray(imgurl) && imgurl.length > 0
      ? imgurl[0]?.fields?.url?.value
      : "";
  const handlePurchase = async () => {
    try {
      await addToCart({
        name: title,
        price: parseFloat(price.replace("$", "")),
      });
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };

  return (
    <ProductCard
      title={title}
      pricePerMonth={price}
      features={featureItems}
      buttonLabel={actionLabel}
      footerText={terms}
      imgUrl={imgSrc}
      onBuy={handlePurchase}
    />
  );
};
