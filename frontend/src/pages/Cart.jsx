import React from "react";
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
import { CircleX, Delete } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const invoices = [
  {
    title: "mens jaclek",
    productimage:
      "https://images.unsplash.com/photo-1565548058654-6ba93b5e3135?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: "1",
    stock: 12,
    price: 1999,
    brand: "Levi's",
    subtotal: 1999,
  },
  {
    title: "mens jaclek",
    productimage:
      "https://images.unsplash.com/photo-1563941962438-7f434920f2b9?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: "2",
    stock: 12,
    price: 1999,
    brand: "Levi's",
    subtotal: 1999,
  },
  {
    title: "mens jaclek",
    productimage:
      "https://images.unsplash.com/photo-1514644947855-333735a56a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3Roc3xlbnwwfHwwfHx8MA%3D%3D",
    quantity: "3",
    stock: 12,
    price: 1999,
    brand: "Levi's",
    subtotal: 1999,
  },
];

function Cart() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left section - Table */}
        <div className="w-full  lg:w-2/3 bg-white shadow-md rounded-lg p-4 ">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    <div className=" w-2xs flex justify-around items-center">
                      <CircleX className="cursor-pointer" />
                      <img
                        className="size-20 object-cover "
                        src={invoice.productimage}
                        alt=""
                      />
                      <Link className="hover:text-red-500 transition-all duration-150">
                        <p>{invoice.title}</p>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell className="text-base font-semibold">
                    ₨.{invoice.price}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        className='cursor-pointer'
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(index, "dec")}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">
                        {invoice.quantity}
                      </span>
                      <Button
                        className='cursor-pointer'
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(index, "inc")}
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.subtotal}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        {/* Right section - Summary or actions */}
        <div className="w-full lg:w-1/3  shadow-md rounded-lg p-4 h-fit">
          <h2 className="text-3xl font-bold mb-4 p-2 bg-gray-100">Order Summary</h2>
          <p className="text-md text-gray-700 mb-2 ">Items: 7</p>
          <hr className="py-3"  />
          <p className="text-md text-gray-700 mb-2">Subtotals: 1999</p>
          <hr className="py-3"  />
          <p className="text-md text-gray-700 mb-2">Estimated Total: $2,500.00</p>
          <hr className="py-3" />
          <button className="mt-4 w-full cursor-pointer bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
