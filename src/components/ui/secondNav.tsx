/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  LogOut,
  Settings,
  User,
  ShoppingBag,
  User2Icon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useLogout } from "@/features/auth/hooks/hookAuth";
import { useToast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { selectCartTotalQuantity } from "@/lib/selectors/cartSelectors";
import CartPage from "../pages/CartPage";

const SecondNav = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter(); // hook router
  const {mutate: Logout } = useLogout(); // hook logout
  const { toast } = useToast(); // hook toast

  useEffect(() => {
    // Define the handleScroll function
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    //check if user login get username user

    const storedName = localStorage.getItem('value-data-username');
    if(storedName){
      setIsLogin(true);
    }

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // cart items
  const cart = useSelector((state: RootState) => state.cartItems);
  // total quantity
  const totalQuantity= useSelector(selectCartTotalQuantity)

  const handleLogout = () => {
    try{
      Logout();
      localStorage.removeItem('value-data-username');
        toast({
              title: "Logout Success",
              description: "You have successfully logged out.",
            });
            router.push('/');
    }catch(err){
      toast({
        title: "Logout Failed",
        description: (err as any).response.data.message,
      })
    }
  }
  

  return (
    <div
      className={`${
        isScroll ? "bg-white text-black" : "bg-transparent text-white"
      } fixed flex p-4 font-bold flex-row transition-all justify-between w-full top-0 z-50 items-center`}
    >
      <div className="flex justify-center items-center">
        <h2 className="font-bold">VeloceVault</h2>
      </div>
      <div className="md:flex md:flex-row ml-[445px] flex-col hidden gap-2 space-x-2">
        <Link href="/">Home</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/news">News</Link>
        <Link href="/support">Support</Link>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center md:ml-[345px]">
       <Sheet>
                 <SheetTrigger className="flex flex-row items-center gap-2">
                   <ShoppingBag className={` ${isScroll ? 'text-black' : 'text-white'} font-bold md:text-xl text-[2px]`} />
                   <span className="text-xs font-bold">{totalQuantity}</span>
                 </SheetTrigger>
                 <SheetContent>
                   <SheetHeader>
                     <SheetTitle>Your Cart</SheetTitle>
                     {cart.cartItems.length === 0 ? (
                       <p className="text-center">Your cart is empty.</p>
                     ): (
                       cart.cartItems.map((product: any) => (
                         <CartPage key={product.id} product={product} />
                       ))
                     )}
                   </SheetHeader>
                   <SheetFooter>
                     <h2 className="font-bod">Total: ${cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
                   </SheetFooter>
                 </SheetContent>
               </Sheet>
        {isLogin ? (
           <DropdownMenu>
           <DropdownMenuTrigger asChild>
             <Button variant="outline"><User2Icon className="w-8 h-8"/></Button>
           </DropdownMenuTrigger>
           <DropdownMenuContent className="w-56">
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuGroup>
              <Link href="/settings/profile">
               <DropdownMenuItem>
                 <User />
                 <span>Profile</span>
                 <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
               </DropdownMenuItem>
               </Link>
               <DropdownMenuItem>
                 <Settings />
                 <span>Settings</span>
                 <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
               </DropdownMenuItem>
             </DropdownMenuGroup>
             <DropdownMenuSeparator />
             <DropdownMenuItem>
              <Button variant="destructive" onClick={handleLogout}>
               <LogOut />
               <span>Log out</span>
               <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
               </Button>
             </DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu>        
        ) : (
          <button
          className={`${isScroll ? 'text-black bg-white' : 'text-white bg-black'} p-2 rounded-lg w-auto h-auto flex justify-center items-center font-bold`}
          onClick={() => router.push("/auth/login")}
        >
          Login
        </button>
        )}
      </div>
    </div>
  );
};

export default SecondNav;
