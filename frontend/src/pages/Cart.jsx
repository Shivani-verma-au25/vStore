import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const initialItems = [
  {
    id: 1,
    title: "Men's Jacket",
    productimage:
      "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?q=80&w=687&auto=format&fit=crop",
    quantity: 1,
    stock: 12,
    price: 1999,
    brand: "Levi's",
  },
  {
    id: 2,
    title: "Men's Jacket",
    productimage:
      "https://images.unsplash.com/photo-1563941962438-7f434920f2b9?q=80&w=713&auto=format&fit=crop",
    quantity: 2,
    stock: 12,
    price: 1999,
    brand: "Levi's",
  },
  {
    id: 3,
    title: "Men's Jacket",
    productimage:
      "https://images.unsplash.com/photo-1514644947855-333735a56a3d?w=600&auto=format&fit=crop",
    quantity: 3,
    stock: 12,
    price: 1999,
    brand: "Levi's",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          let newQty =
            type === "inc"
              ? item.quantity + 1
              : item.quantity > 1
              ? item.quantity - 1
              : 1;
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Table */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <Table>
            <TableCaption className="text-left">
              Products in your cart
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <div className="flex gap-2 items-center max-w-[200px] flex-wrap sm:flex-nowrap">
                      <CircleX
                        className="cursor-pointer text-red-500 hover:scale-110 transition"
                        onClick={() => handleRemove(item.id)}
                      />
                      <img
                        src={item.productimage}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <Link className="hover:text-red-500 transition text-sm">
                        {item.title}
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>₨.{item.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, "dec")}
                      >
                        -
                      </Button>
                      <span className="min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ₨.{item.price * item.quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right font-semibold">
                  ₨.{totalAmount}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3 text-gray-700 text-sm">
            <p>Items: {totalItems}</p>
            <hr />
            <p>Subtotal: ₨.{totalAmount}</p>
            <hr />
            <p className="text-base font-semibold">
              Estimated Total: ₨.{totalAmount}
            </p>
          </div>
          <button className="mt-6 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* {relatedProducts.map((product) => ( */}
          {initialItems.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.productimage}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-sm font-semibold line-clamp-1">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">₨.{product.price}</p>
              <button
                className="w-full bg-black text-white py-1 rounded hover:bg-gray-800 transition text-sm"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
