import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-label";
import React, { useState } from "react";

const TransferMoneyForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    walletId: "",
    comment: "",
  });

  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <div className=" py-2 ">
        <Label className="">Amount</Label>
        <Input
          name="amount"
          onChange={(e) => handleFormChange(e)}
          value={formData.amount}
          type="number"
          placeholder="100"
        />
      </div>
      <div className=" py-2 ">
        <Label className="">Receiver Wallet id</Label>
        <Input
          name="walletId"
          onChange={(e) => handleFormChange(e)}
          value={formData.walletId}
          type="text"
          placeholder="#FTX203943SR32G"
        />
      </div>
      <div className=" py-2 ">
        <Label className="">Any Comment</Label>
        <Input
          name="comment"
          onChange={(e) => handleFormChange(e)}
          value={formData.comment}
          type="text"
          placeholder="Gift"
        />
      </div>
      <DialogClose>
        <Button onClick={() => handleSubmit()}>Submit</Button>
      </DialogClose>
    </div>
  );
};

export default TransferMoneyForm;
