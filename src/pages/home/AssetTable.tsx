import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Coin } from "@/types";

const AssetTable = () => {
  const navigate = useNavigate();
  const [coinsData, setCoinsData] = useState([]);
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets/?vs_currency=USD&per_page=10&page=1";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCoinsData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Coin</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Volumne</TableHead>
          <TableHead>Market Cap.</TableHead>
          <TableHead className="">24H(%Change)</TableHead>
          <TableHead className="">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coinsData.map((coin: Coin) => (
          <TableRow key={coin.id}>
            <TableCell
              onClick={() => navigate(`/market/${coin.id}`)}
              className="font-medium flex items-center gap-2 hover:cursor-pointer"
            >
              <Avatar className="-z-50">
                <AvatarImage src={coin.image}></AvatarImage>
              </Avatar>
              <p>{coin.name}</p>
            </TableCell>
            <TableCell>{coin.symbol}</TableCell>
            <TableCell>{coin.total_volume}</TableCell>
            <TableCell className="">{coin.market_cap}</TableCell>
            <TableCell
              className={`${
                coin.price_change_percentage_24h < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {coin.price_change_percentage_24h}
            </TableCell>
            <TableCell className="">{coin.current_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetTable;
