import DownloadCTA from "@/components/sections/download-cta"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <DownloadCTA/>
      <h1 className="text-4xl font-bold mb-4">FashionHive</h1>
      <p className="text-xl mb-8">Perfect Measurements, Every Time.</p>
      <Button className="rounded-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
    </main>
  )
}