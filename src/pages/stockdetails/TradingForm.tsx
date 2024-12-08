import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "@/components/hooks/use-toast";
import { DialogClose } from "@radix-ui/react-dialog";
import { Order } from "@/types";
const TradingForm = ({ coinData }: any) => {
  const [walletData, setWalletData] = useState({balance:0});
  const [assetData, setAssetData] = useState();
  const [orderType, setOrderType] = useState("BUY");
  const [quantity, setQuantity] = useState(0);
  const handleOrderType = (value: string) => {
    setOrderType(value);
  };
  const handleQuantityChange = (value: any) => setQuantity(value);

  const sendOrderRequest = () => {
    const orderData: Order = {
      coinId: coinData.id,
      quantity: quantity,
      orderType: orderType,
    };
    const url = "http://localhost:8081/api/orders/pay";
    axios
      .post(url, orderData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        response.status == 200
          ? toast({
              title: "Order Successful",
            })
          : toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
            });
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const walletUrl = "http://localhost:8081/api/wallet";
    axios
      .get(walletUrl, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") },
      })
      .then((response) => {
        if(response.status == 200)
          setWalletData(response.data);
      })
      .catch((error) => console.log(error));

      console.log(walletData.balance)
    const getAssetApiUrl = "http://localhost:8081/api/asset/user/coin/"+coinData.id;
    axios
      .get(getAssetApiUrl, {
        headers: { Authorization: "Bearer " + localStorage.getItem("jwt") }
      })
      .then((response) => {
        if(response.data == 200)
          setAssetData(assetData)
        console.log(response.data)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <div className=" space-y-7">
        <div className="flex items-center gap-4 justify-between">
          <Input
            className=" py-7 focus:outline-none"
            onChange={(e) => handleQuantityChange(e.target.value)}
            placeholder="enter amount"
            type="number"
            name="amount"
            value={quantity}
          />
          <div className=" coin-quantity ">
            <p className=" text-2xl w-36 h-14 border flex justify-center items-center rounded-md">
              5543
            </p>
          </div>
        </div>
        {false && (
          <h3 className="  text-red-600 text-center text-sm ">
            Unsufficient Wallet Balance To Buy!
          </h3>
        )}
        <div className=" flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={coinData.image.large} />
            </Avatar>
          </div>
          <div>
            <div className=" flex items-center gap-2 text-gray-600">
              <p>{coinData.symbol}</p>
              <DotIcon />
              <p>{coinData.name}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="font-bold ">
                {coinData.market_data.current_price.usd}$
              </p>
              <p className=" text-sm text-red-500">
                <span>84397929</span>
                <span>(-0.2803%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <p>Order Type</p>
          <p>Market Order</p>
        </div>
        <div className=" flex items-center justify-between ">
          <p>{orderType == "BUY" ? "Available Cash" : "Available Quantity"}</p>
          <p>{orderType == "BUY" ? (walletData.balance)+"$" : 4.2}</p>
        </div>
        <div className=" flex flex-col gap-3 items-center justify-center">
          <DialogClose className="w-full">
            <Button
              variant={"default"}
              className={` w-full py-6 ${
                orderType == "BUY" ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={() => sendOrderRequest()}
            >
              {orderType}
            </Button>
          </DialogClose>
          <Button
            className=""
            variant={"link"}
            onClick={() => handleOrderType(orderType == "BUY" ? "SELL" : "BUY")}
          >
            {orderType == "BUY" ? "or SELL" : "or BUY"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;
