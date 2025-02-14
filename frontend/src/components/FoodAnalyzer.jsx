import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload, Check, X } from "lucide-react"

export default function FoodAnalyzer() {
  const [imageUrl, setImageUrl] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Analyze Your Food</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          {imageUrl ? (
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Uploaded food"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full max-w-sm h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <Camera className="h-12 w-12 text-gray-400" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            id="cameraInput"
          />
          <div className="flex space-x-4">
            <Button onClick={() => document.getElementById("cameraInput")?.click()}>
              <Camera className="mr-2 h-4 w-4" /> Take Photo
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("cameraInput")?.click()}>
              <Upload className="mr-2 h-4 w-4" /> Upload Image
            </Button>
          </div>
        </div>
        {analyzing && <p className="text-center mt-4">Analyzing your food...</p>}
        {analyzed && (
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-2">Analysis Results:</h3>
            <ul className="list-disc list-inside">
              <li>Calories: 350 kcal</li>
              <li>Protein: 15g</li>
              <li>Carbs: 40g</li>
              <li>Fat: 12g</li>
            </ul>
          </div>
        )}
      </CardContent>
      {analyzed && (
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={() => console.log("Added to daily intake")}>
            <Check className="mr-2 h-4 w-4" /> I'm eating this
          </Button>
          <Button variant="outline" onClick={() => setAnalyzed(false)}>
            <X className="mr-2 h-4 w-4" /> Not eating
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}