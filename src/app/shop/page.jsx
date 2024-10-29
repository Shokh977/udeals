import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Filter from "@/UI/Filter";
import Products from "@/components/Products";
import Label from "@/UI/Label";

const Page = () => {
  return (
    <div className="h-auto">
      <div className="h-[300px] relative">
        <Image
          src="/shop/hero.jpg"
          fill
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
          <h1 className="text-4xl">Shop</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage href="/shop">Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      {/* filter section */}
      <Filter />
      <div className="my-28 mx-auto">
        <Products />
      </div>
      <Label/>
    </div>
  );
};

export default Page;
