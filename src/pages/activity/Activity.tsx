import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
const Activity = () => {
  return (
    <div className="p-5 lg:px-10">
      <div className="text-3xl font-bold pb-5 ">
      <h1 className="">Activity</h1>
      </div>
      
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="">Date & Time</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Volume</TableHead>
            <TableHead>Market Cap.</TableHead>
            <TableHead className="">Change(%)</TableHead>
            <TableHead className="">Price</TableHead>
            <TableHead className="">kls</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9].map((coin, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>22/11/2024</p>
                <p>11:57</p>
              </TableCell>
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
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Activity
