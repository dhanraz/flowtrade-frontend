import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

const TopupForm = ({handleAddMoney}:any) => {
  const [amount, setAmount] = useState(100);
  const [paymentMethod, setPaymentMethod] = useState("Default");
  const handleAmountChange = (value: any) => setAmount(value);
  const handlePaymentMethodChange = (value: any) => setPaymentMethod(value);
  const handleSubmit=()=>handleAddMoney(amount, paymentMethod);
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h2>Enter Amount</h2>
        <Input
          type="number"
          value={amount}
          onChange={(e) => handleAmountChange(e.target.value)}
          placeholder="100"
        />
      </div>
      <div>
        <h2 className=" pb-2">Select payment method</h2>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className=" flex gap-2"
          defaultValue={paymentMethod}
        >
          <div className="flex items-center space-x-2 border rounded-md p-2 ">
            <RadioGroupItem value="RAZORPAY" id="option-one" />
            <Label className=" cursor-pointer" htmlFor="option-one">Razorpay</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="STRIPE" id="option-two" />
            <Label className=" cursor-pointer" htmlFor="option-two">Stripe</Label>
          </div>
          <div className="flex items-center space-x-2 border rounded-md p-2">
            <RadioGroupItem value="Default" id="option-three" />
            <Label className=" cursor-pointer" htmlFor="option-three">Direct</Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose><Button variant={"outline"} onClick={()=>handleSubmit()} className="w-full py-5 mt-3 hover:bg-gray-100">Submit</Button></DialogClose>
    </div>
  );
};

export default TopupForm;
