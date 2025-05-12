import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function DashboardRoute() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl font-medium">Your Blog Articles</div>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
    </div>
  );
}
