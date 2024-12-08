import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { BookmarkIcon, BookmarkMinusIcon, icons } from "lucide-react";
import { useState } from "react";

const Watchlist = () => {
  const handleRemoveWatchlist = (value:any)=>(console.log(value));
  return (
    <div className="p-5 lg:px-10">
      <div className="text-3xl font-bold pb-5 flex gap-5 items-center">
      <BookmarkIcon size={35} fill="yes"/> 
      <h1 className="">Watchlist</h1>
      </div>
      
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="">Coin</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap.</TableHead>
            <TableHead className="">Change(%)</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className=""><BookmarkMinusIcon/></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9].map((coin, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    src={
                      "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                    }
                  ></AvatarImage>
                </Avatar>
                <p>Bitcoin</p>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell className="">539749030</TableCell>
              <TableCell className="">3123223</TableCell>
              <TableCell className="">-0.2%</TableCell>
              <TableCell className="">1727</TableCell>
              <TableCell className=""><Button onClick={()=>handleRemoveWatchlist(coin)} variant={"ghost"} size={"icon"}><BookmarkIcon fill="" className="w-6 h-6" /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Watchlist;
