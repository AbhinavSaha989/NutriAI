import Header from "@/components/Header";
import FoodAnalyzer from "@/components/FoodAnalyzer";
import DailyGoalTracker from "@/components/DailyGoalTracker";

export default function Home() {
  
  return (
    <div className="min-h-screen ">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <FoodAnalyzer />
          <DailyGoalTracker />
        </div>
      </main>
    </div>
  );
}
