import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { error } from "console";
const PaymentDetails = () => {
  const [bankDetails, setBankDetails] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: 0,
    ifsc: "",
  });
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: 0,
    ifsc: "",
  });
  const handleFormChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    sendEditBankDetails();
  };
  useEffect(() => {
    const url = "http://localhost:8081/api/payment-details";
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
      .then((response) => {
        setBankDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const sendEditBankDetails = () => {
    const url = "http://localhost:8081/api/add/payment-details";
    axios
      .post(url, formData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {console.log(response.data)})
      .catch((error) => console.log(error));
  };
  return (
    <div className="px-10 py-2">
      <h1 className=" font-bold text-3xl">Payment Details</h1>
      <div className=" my-2">
        <Card className="lg:w-[50%] ">
          <CardHeader>
            <CardTitle>{bankDetails.bankName}</CardTitle>
            <CardDescription>{bankDetails.accountNumber}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" flex items-center mt-2">
              <p className="w-32">A/C Holder : </p>
              <p className="text-gray-600">{bankDetails.accountHolderName}</p>
            </div>
            <div className=" flex items-center mt-2">
              <p className="w-32">IFSC : </p>
              <p className=" text-gray-600">{bankDetails.ifsc}</p>
            </div>
          </CardContent>
        </Card>
        <div className=" py-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Bank Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Payment Details</DialogTitle>
                <DialogDescription>
                  Make changes to your payment details here. Click save when
                  you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Your Name
                  </Label>
                  <Input
                    name="accountHolderName"
                    id="name"
                    value={formData.accountHolderName}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="Raj Kumar"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bankname" className="text-right">
                    Bank Name
                  </Label>
                  <Input
                    id="bankname"
                    name="bankName"
                    value={formData.bankName}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="Bank of India"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="acnumber" className="text-right">
                    Account No.
                  </Label>
                  <Input
                    id="acnumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="xxxxxxxxxxx"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ifsc" className="text-right">
                    IFSC Code
                  </Label>
                  <Input
                    id="ifsc"
                    name="ifsc"
                    value={formData.ifsc}
                    onChange={(e) => handleFormChange(e)}
                    placeholder="SBIN1234"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => handleSubmit()} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
