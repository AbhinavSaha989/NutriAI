import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";

export default function Header() {
  const isLoggedIn = true;

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">FoodLens</h1>
        <Button variant={isLoggedIn ? "outline" : "default"}>
          {isLoggedIn ? (
            <>
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" /> Login
            </>
          )}
        </Button>
      </div>
    </header>
  );
}
