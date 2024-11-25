
import Image from "next/image";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu, MenuIcon } from "lucide-react";

export default function Header() {
  return (
  
    
<main className="bg-black text-white">

    {/* <!-- Navbar --> */}
    <nav className="bg-black flex  space-x-6 pt-4 md:flex justify-center items-center ">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold p-3 pl-10" >Car<span className="text-yellow-500"> Rental</span></h1>
            <ul className="hidden md:block ">
               
               <li className="space-x-5 mr-60">
                <Link href="/" className="hover:text-yellow-500">Home</Link>
                <Link href="about" className="hover:text-yellow-500">About</Link>
                
                <Link href="cars" className="hover:text-yellow-500">Cars</Link>
                <Link href="booking" className="hover:text-yellow-500">Booking</Link>

                
                </li>

                 </ul>

        <Sheet>
  <SheetTrigger className="text-1xl pr-24 md:hidden"><Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="mr-60">Rizwana Ali</SheetTitle>
      <SheetDescription>
        
       <ul className="mr-60 space-y-10">

                <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                <li><Link href="about" className="hover:text-yellow-500">About</Link></li>
                
                <li><Link href="cars" className="hover:text-yellow-500">Cars</Link></li>
                <li><Link href="booking" className="hover:text-yellow-500">Booking</Link></li>

                

                 </ul>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
            
      
        </div>
    </nav>
    
    </main>

    )
    }
    Header