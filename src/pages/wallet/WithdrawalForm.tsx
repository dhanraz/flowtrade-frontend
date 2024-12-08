import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSignIcon, LandmarkIcon } from "lucide-react";
import React, { useState } from "react";

const WithdrawalForm = () => {
  const [balance, setBalance] = useState("3000");
  const [amount, setAmount] = useState(100);
  const handleAmountChange = (value: any) => setAmount(value);
  const handleSubmit=()=>console.log(amount, balance);
  return (
    <div>
      <div className=" flex gap-2 justify-between items-center border p-3 text-xl font-semibold ">
        <span>Available Balance</span>
        <div className="flex gap-1 items-center">
          <DollarSignIcon />
          <span> {balance}</span>
        </div>
      </div>

      <div className="my-3">
        <Label htmlFor="amountinput">Enter Withdrawal Amount</Label>
        <Input id="amountinput" name="amountinput" onChange={(e)=>handleAmountChange(e.target.value)} type="number" value={amount} placeholder="100"/>
      </div>
      <div>
        <h3>Transfer to</h3>
        <div className="border p-2 flex gap-3 items-center">
          <LandmarkIcon size={30} color="gray"/>
          <div>
            <h3 className=" text-xs font-semibold">Yes Bank</h3>
            <p>xxxx-xxxx-4812</p>
          </div>
        </div>
      </div>
      <Button className=" mt-3" onClick={()=> handleSubmit()}>Submit</Button>
    </div>
  );
};

export default WithdrawalForm;
