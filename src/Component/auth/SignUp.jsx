import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SignUp = () => {
  return (
    <Link href="/signup" className="">
      <Button
        variant="outline"
        className="p-5 text-orange-500 hover:bg-orange-400">
        Sign Up
      </Button>
    </Link>
  );
};
