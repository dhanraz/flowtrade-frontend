import { Button } from "@/components/ui/button";
import { useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { DotIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Home = () => {
  const [category, setCategory] = useState("all");
  const handleCategory = (value: string) => setCategory(value);
  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className=" "
            >
              {" "}
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className=" "
            >
              {" "}
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topgainers")}
              variant={category == "topgainers" ? "default" : "outline"}
              className=" "
            >
              {" "}
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("toplosers")}
              variant={category == "toplosers" ? "default" : "outline"}
              className=" "
            >
              {" "}
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400"></DotIcon>
                <p className=" text-gray-400">Bitcoin</p>
              </div>
              <div className=" flex items-end gap-2">
                <p>54653</p>
                <p className=" text-red-400">
                  <span>-4500845973.35</span>
                  <span>(-0.00023%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
