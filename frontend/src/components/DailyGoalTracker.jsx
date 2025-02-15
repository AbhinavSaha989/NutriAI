import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";

export default function DailyGoalTracker() {
  const dailyGoal = 3000; 
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
  });

  const currentIntake = dailyCalories || 0;
  const progress = (currentIntake / dailyGoal) * 100;

  if (isLoading || avgLoading) return <p>Loading...</p>;
  if (error || avgError)
    return <p className="text-red-500">Failed to load data</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Goal Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Calorie Intake</h3>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-600 mt-2">
              {currentIntake} / {dailyGoal} kcal
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Daily Average Intake</h3>
            <p className="text-sm text-gray-600">
              {dailyAverage.toFixed(2)} kcal
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Nutrient Breakdown</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Protein</span>
                <span>60g / 100g</span>
              </li>
              <li className="flex justify-between">
                <span>Carbs</span>
                <span>150g / 250g</span>
              </li>
              <li className="flex justify-between">
                <span>Fat</span>
                <span>45g / 65g</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
