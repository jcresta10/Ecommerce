import { teaMenu } from "@/data/teaMenu"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="p-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">🍵 Our Tea Selection</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our handcrafted teas — from soothing classics to fruity innovations.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teaMenu.map((item) => (
          <Card
            key={item.title}
            className="hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-2xl"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="mt-2">
                <a href={item.href}>Learn more →</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
