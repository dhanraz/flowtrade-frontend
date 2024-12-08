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
import axios from "axios";
import { Asset } from "@/types";

const Portfolio = () => {
  const [assetList, setAssetList] = useState<Asset[]>([]);
  useEffect(() => {
    const url = "http://localhost:8081/api/asset";
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        setAssetList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(assetList);
  return (
    <div className="p-5 lg:px-10">
      <h1 className="text-3xl font-bold pb-5">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Asset</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Change</TableHead>
            <TableHead className="">Change(%)</TableHead>
            <TableHead className="">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assetList.map((asset, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage
                    className=" w-10"
                    src={asset.coin.image}
                  ></AvatarImage>
                </Avatar>
                <p>{asset.coin.name}</p>
              </TableCell>
              <TableCell>{asset.buyPrice}</TableCell>
              <TableCell className="">{asset.quantity}</TableCell>
              <TableCell className="">3123</TableCell>
              <TableCell className="">
                {asset.coin.price_change_percentage_24h} %
              </TableCell>
              <TableCell className="">
                {asset.buyPrice * asset.quantity} $
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
