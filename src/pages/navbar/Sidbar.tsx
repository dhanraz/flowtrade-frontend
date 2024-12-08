import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { MenuItem } from "@/types";
import {
  ActivityIcon,
  BookmarkIcon,
  HomeIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const menu: MenuItem[] = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon /> },
  { name: "WatchList", path: "/watchlist", icon: <BookmarkIcon /> },
  { name: "Activity", path: "/activity", icon: <ActivityIcon /> },
  { name: "Porftfolio", path: "/portfolio", icon: <LayoutDashboardIcon /> },
  { name: "payment details", path: "/payment-details", icon: <LandmarkIcon /> },
  { name: "Profile", path: "/profile", icon: <UserIcon /> },
  { name: "Logout", path: "/logout", icon: <LogOutIcon /> },
];
const Sidbar = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 space-y-5">
      {menu.map((menuItem) => (
        <SheetClose key={menuItem.name} className="w-full">
          <Button
            onClick={() => navigate(menuItem.path)}
            variant={"outline"}
            className="flex gap-5 items-center py-6 w-full "
          >
            <span className="w-8">{menuItem.icon}</span>
            <p>{menuItem.name}</p>
          </Button>
        </SheetClose>
      ))}
    </div>
  );
};

export default Sidbar;
