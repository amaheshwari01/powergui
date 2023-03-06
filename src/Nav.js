

// import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function Nav() {
  // const [openNav, setOpenNav] = useState(false);
 
  // // useEffect(() => {
  // //   window.addEventListener(
  // //     "resize",
  // //     () => window.innerWidth >= 960 && setOpenNav(false)
  // //   );
  // // }, []);
 
  // const navList = (
  //   <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <button className="flex items-center">
  //         Pages
  //       </button>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <button className="flex items-center">
  //         Account
  //       </button>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <button className="flex items-center">
  //         Blocks
  //       </button>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <button className="flex items-center">
  //         Docs
  //       </button>
  //     </Typography>
  //   </ul>
  // );
 
  return (
    <Navbar className="mx-auto  !w-full lg:px-8 lg:py-4 bg-blue-500">
      <div className="container mx-auto w-full flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>POWERSCRAPER</span>
        </Typography>
        {/* <div className="hidden lg:block">{navList}</div> */}
        <Button variant="gradient" size="sm" >
          <span>Sign In</span>
        </Button>
     
      </div>
 
    </Navbar>
  );
}