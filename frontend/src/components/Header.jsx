import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios"; 
import useThemeStore from "../store/themeStore";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Header() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { darkMode, setDarkMode } = useThemeStore();

  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
  });

 
  const handleLogout = async () => {
    try {
      const response = await axiosInstance.get("/users/logout", {
        withCredentials: true,
      });

      if (response.status === 200) {
        toast({
          title: "Success",
          description: response.data.message,
        });

        queryClient.invalidateQueries({ queryKey: ["authUser"] });
        navigate("/login"); 
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Error",
        description: error.response?.data?.message || "Logout failed",
      });
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-zinc-950 shadow border-b border-gray-300 dark:border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to={"/"}
          className="flex items-center space-x-2 text-xl font-bold flex-shrink-0"
        >
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="hidden sm:block dark:text-zinc-50">NutriAI</span>
        </Link>
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-800 dark:text-gray-200"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Login / Logout Button */}
          {authUser ? (
            <Button
              variant="outline"
              onClick={handleLogout} // ✅ Correct onClick placement
              className="text-gray-900 dark:text-white bg-gray-200 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          ) : (
            <Button
              variant="default"
              className="text-gray-900 dark:text-white bg-gray-200 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
            >
              <Link to="/login" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4" /> Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
