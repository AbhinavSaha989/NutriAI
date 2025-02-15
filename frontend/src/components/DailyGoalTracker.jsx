import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import { Lock } from "lucide-react";

export default function DailyGoalTracker() {
  const dailyGoal = 2200;

  const { data: authUser, isLoading: authLoading } = useQuery({
    queryKey: ["authUser"],
  });

  const {
    data: dailyCalories,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["dailyCalories"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users/get-daily-calorie", {
        withCredentials: true,
      });
      return response.data.calories;
    },
    enabled: !!authUser,
  });

  const {
    data: dailyAverage,
    isLoading: avgLoading,
    error: avgError,
  } = useQuery({
    queryKey: ["dailyAverage"],
    queryFn: async () => {
      const response = await axiosInstance.get("/users/get-daily-avg", {
        withCredentials: true,
      });
      return response.data.dailyAverage;
    },
    enabled: !!authUser, 
  });

  const currentIntake = authUser ? dailyCalories || 0 : 1500; // Dummy value if not logged in
  const avgIntake = authUser ? dailyAverage || 0 : 1800; // Dummy value if not logged in
  const progress =
    ((currentIntake > dailyGoal ? dailyGoal : currentIntake) / dailyGoal) * 100;

  if (isLoading || avgLoading || authLoading) return <p>Loading...</p>;
  if (error || avgError)
    return <p className="text-red-500">Failed to load data</p>;

  return (
    <div className="relative">
      <Card
        className={`${
          !authUser ? "opacity-50 blur-sm pointer-events-none" : ""
        }`}
      >
        <CardHeader>
          <CardTitle>Daily Goal Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Calorie Intake</h3>
              <div className="relative">
                <Progress value={progress} className="w-full" />
                {progress >= 100 && (
                  <div className="absolute inset-0 bg-red-500 rounded-full"></div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {currentIntake} / {dailyGoal} kcal
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Daily Average Intake</h3>
              <p className="text-sm text-gray-600">
                {avgIntake.toFixed(2)} kcal
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {!authUser && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg p-6 rounded-lg">
          <Lock size={50} className="mb-2" /> {/* Large lock icon */}
          Please log in to access daily stats.
        </div>
      )}
    </div>
  );
}
