import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function DailyGoalTracker() {
  // This is placeholder data. In a real app, this would be dynamic based on user's intake
  const dailyGoal = 2000;
  const currentIntake = 1350;
  const progress = (currentIntake / dailyGoal) * 100;

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
