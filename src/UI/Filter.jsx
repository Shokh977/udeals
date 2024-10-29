import { LucideFilter, Search } from "lucide-react";

const Filter = () => {
  return (
    <div className="w-full justify-between lg:flex-row flex items-center flex-col gap-4 p-6 bg-orange-200 px-28">
    
      <div className='flex dark:bg-gray-800 bg-orange-200 border border-black px-2 py-2 rounded-lg'> 
        <input type="text"placeholder="Search"  className=' px-2 bg-transparent outline-none dark:text-gray-200 text-gray-900 border-none'/>
        <Search className="dark:text-gray-200 text-gray-900 "/>
      </div>
        <div className="flex items-center ">
        <p className="flex gap-2 text-gray-900 cursor-pointer">
          <LucideFilter className=""/> Filter
        </p>
        <div className="h-full w-[1px] bg-black mx-8 "></div>
        <p className="text-gray-900 cursor-pointer">2,457 results</p>
      </div>
    </div>
  );
};

export default Filter;
