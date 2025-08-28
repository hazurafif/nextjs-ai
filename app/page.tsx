import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <Button>
        <UserPlus className="size-4" />
        Add User
      </Button>
    </div>
  );
}
