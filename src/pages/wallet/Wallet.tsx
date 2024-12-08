import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CopyIcon,
  DollarSign,
  RotateCcwIcon,
  ShuffleIcon,
  UploadIcon,
  WalletIcon,
} from "lucide-react";
import TopupForm from "./TopupForm";
import WithdrawalForm from "./WithdrawalForm";
import TransferMoneyForm from "./TransferMoneyForm";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/components/hooks/use-toast";

const Wallet = () => {
  const { toast } = useToast();
  const [walletBalance, setWalletBalance] = useState(0);
  const [username, setUsername] = useState("My");
  const [walletRefresh, setWalletRefresh] = useState(false);
  const handleWalletRefreshButton = () => {
    setWalletRefresh(!walletRefresh);
  };
  useEffect(() => {
    const url = "http://localhost:8081/api/wallet";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        const balance = response.data.balance;
        const username = response.data.user.fullName;
        setWalletBalance(balance);
        setUsername(username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [walletRefresh]);

  const handleAddMoney = (amount: any, method: any) => {
    console.log("send add money request");
    const url = "http://localhost:8081/api/wallet/deposit";
    axios
      .put(url, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
        params: {
          money: amount,
        },
      })
      .then((response) => {
        if (response.data) {
          setWalletRefresh(!walletRefresh);
          toast({
            description: "Balance added successfully",
          });
          console.log(response);
        }
      })
      .catch((error) => {
        console.error(error);
        toast({
          description:"something went wrong!"
        ,variant:"destructive"
        })
      });
  };
  return (
    <div className=" px-5 flex flex-col items-center">
      <div className=" pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <div className="flex justify-between items-center">
              <div className="flex  items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className=" text-2xl">
                    {username}'s Wallet
                  </CardTitle>
                  <div className=" flex items-center gap-2 ">
                    <p className=" text-gray-700  text-sm">#FTX0280RVPK96G</p>
                    <CopyIcon
                      size={15}
                      className=" cursor-pointer hover:text-slate-300"
                    />
                  </div>
                </div>
              </div>
              <div>
                <RotateCcwIcon
                  onClick={handleWalletRefreshButton}
                  className="w-6 h-6 cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className=" flex items-center ">
              <DollarSign />
              <span className="text-2xl font-semibold">{walletBalance}</span>
            </div>
            <div className=" flex gap-7 mt-5">
              <div>
                <Dialog>
                  <DialogTrigger>
                    <div className="p-1 h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded shadow-slate-500 shadow-md">
                      <UploadIcon />
                      <span className="text-sm mt-2">Add Money</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className=" border p-4">
                    <DialogHeader>
                      <DialogTitle>Top up your Wallet</DialogTitle>
                    </DialogHeader>
                    <TopupForm handleAddMoney={handleAddMoney} />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="dialog2">
                <Dialog>
                  <DialogTrigger>
                    <div className="p-1 h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded shadow-slate-500 shadow-md">
                      <UploadIcon />
                      <span className="text-sm mt-2">Withdrawal Money</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className=" border p-4">
                    <DialogHeader>
                      <DialogTitle>Withdrawal Request</DialogTitle>
                    </DialogHeader>
                    <WithdrawalForm />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="dialog3">
                <Dialog>
                  <DialogTrigger>
                    <div className="p-1 h-24 w-24 hover:text-gray-400 cursor-pointer flex flex-col items-center justify-center rounded shadow-slate-500 shadow-md">
                      <ShuffleIcon />
                      <span className="text-sm mt-2">Transer Money</span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className=" border p-4">
                    <DialogHeader>
                      <DialogTitle>Transer wallet 2 wallet</DialogTitle>
                    </DialogHeader>
                    <TransferMoneyForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10 ">
          <div className=" flex gap-2 items-center pb-5">
            <h2 className=" text-xl font-bold">History</h2>
            <RotateCcwIcon className=" h-7 w-7 cursor-pointer hover:text-gray-400" />
          </div>
          <div className=" space-y-3">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <div key={index}>
                <Card className=" px-5 flex justify-between items-center">
                  <div className=" flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon />
                      </AvatarFallback>
                    </Avatar>

                    <div className=" space-y-1">
                      <h2 className="  font-semibold">Buy asset</h2>
                      <p className=" text-sm  text-gray-500">21/10/24</p>
                    </div>
                  </div>
                  <div>
                    <p className=" text-green-400 ">938 $</p>
                  </div>
                </Card>
                {/* <Toaster/> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
