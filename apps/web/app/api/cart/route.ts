import { NextResponse } from "next/server";

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

const cart: CartItem[] = [
  {
    id: 1,
    name: "mock product",
    price: 0,
    quantity: 1,
  },
];

export async function GET() {
  return NextResponse.json({ items: cart, total: calculateTotal() });
}

export async function POST(req: Request) {
  const product: Product = await req.json();

  const existingItemIndex = cart.findIndex(
    (item) => item.name === product.name
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  return NextResponse.json({
    items: cart,
    total: calculateTotal().toFixed(2),
  });
}

function calculateTotal(): number {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
