import { redirect } from "next/navigation";
import Image from "next/image";

export default function page(){
  redirect("/home");
}

export function Titlebar() {

  return (
    <div className=" flex flex-row bg-tertiary max-h-16 items-center 
    justify-between z-1000 fixed top-0 right-0 left-0">
      <div className="flex flex-row">
        {/*<Image src={""} alt={""} />*/}
        <div className="p-4">
          Go to all projects 
        </div>

        <div className="p-4">
          Go to Blogs
        </div>
      </div>
      
      <div className="flex flex-row">
        <div className=" p-4 flex flex-row">
        links to my socials
        </div>

        <div className="flex pl-6 pr-6 bg-secondary top-0 bottom-0 left-0 items-center">
          Hire me
        </div>
      </div>
      
    </div>
  );
}
