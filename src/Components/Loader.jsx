import { Loader2 } from "lucide-react"
import "./Loader.css"
export default function Loadeer({ size = "large" }) {
  const sizeClasses = {
    small: "w-4 h-4",
    default: "w-6 h-6",
    large: "w-8 h-8"
  }

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} style={{
        animation: "spin 1s linear infinite"
      }} />
      <span className="sr-only">Loading</span>
    </div>
  )
}