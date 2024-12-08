import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Withdrawal = () => {
  return (
    <div className="p-5 lg:px-10">
      <div className="text-3xl font-bold pb-5 ">
        <h1 className="">Withdrawal</h1>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="">Date & Time</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount($)</TableHead>
            <TableHead>Status.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9].map((coin, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>June 02, 2024 at 11:34 AM</p>
              </TableCell>
              <TableCell className="">
                <p>Bank Account</p>
              </TableCell>
              <TableCell>3000</TableCell>
              <TableCell className=" flex">
                <p className=" rounded-md px-3 py-1 bg-green-600 text-white font-semibold">SUCCESS</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
