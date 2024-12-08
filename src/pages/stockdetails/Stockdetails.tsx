import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import { BookmarkIcon, DotIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import TradingForm from "./TradingForm";
import StockChart from "../home/StockChart";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Stockdetails = () => {
  const [isBookmarked, setIsBookMarked] = useState(false);
  const handleBookmark = () => setIsBookMarked(!isBookmarked);
  const [coinData, setCoinData] = useState({
    id: "etherum",
    image:{
      large:"https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    },
    name: "etherum",
    symbol:"eth",
    market_data: {
      current_price: {usd:3982},
      market_cap: {usd:472927392},
      total_volume:{usd:489298323},
      price_change_percentage_24h: -1.87,
    },
  });

  const location = useLocation();
  const coinId = location.pathname.split("/")[2];
  useEffect(() => {
    const url = "http://localhost:8081/coins/details/" + coinId;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCoinData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" p-5 mt-5 space-y-10 ">
      <div className=" flex justify-between">
        <div className=" md:flex gap-5 items-center">
          <div>
            <Avatar>
              <AvatarImage src={coinData.image.large} />
            </Avatar>
          </div>
          <div>
            <div className=" flex items-center gap-2 text-gray-600">
              <p>{coinData.name}</p>
              <DotIcon />
              <p>{coinData.symbol}</p>
            </div>
            <div className="flex items-end gap-2">
              <p className="font-bold text-xl">
                {coinData.market_data.current_price.usd}$
              </p>
              <p className=" text-red-500">
                <span>{coinData.market_data.total_volume.usd}</span>
                <span>{coinData.market_data.price_change_percentage_24h}%</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <Button onClick={handleBookmark} variant={"ghost"} size={"icon"}>
            {isBookmarked ? <BookmarkIcon /> : <BookmarkIcon fill="" />}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">BUY/SELL</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>BUY/SELL</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <TradingForm coinData={coinData} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <StockChart />
    </div>
  );
};

export default Stockdetails;
