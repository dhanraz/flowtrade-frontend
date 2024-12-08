import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidbar from "./Sidbar";
import { MenuIcon, SearchIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className=" px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex  justify-between items-center">
      <div className=" flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button variant={"ghost"} className=" rounded-full">
              <MenuIcon  />
            </Button>
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className=" w-72 flex justify-center flex-col items-center"
          >
            <SheetHeader className=" w-full">
              <SheetTitle className=" flex gap-2 items-center">
                <Avatar>
                  <AvatarImage src="https://cdn.pixabay.com/photo/2021/05/12/20/18/dogecoin-6249162_960_720.png" />
                </Avatar>
                <div className=" font-bold text-xl">
                  <span className=" text-sky-800">Flow</span>Trade
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidbar />
          </SheetContent>
        </Sheet>

        <p className=" text-sm lg:text-base cursor-pointer">FlowTrade</p>
        <div className="p-0 ml-9">
          <Button variant={"outline"}>
            <SearchIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar className=" bg-sky-800">
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"></AvatarImage>
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
