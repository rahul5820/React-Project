import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
  <h2>hello world</h2>
 <Button variant="outline">shedCN</Button>
 <UserButton/>
  </div>
  );
}
