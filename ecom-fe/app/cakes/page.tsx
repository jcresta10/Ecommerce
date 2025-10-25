'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cakeMenu } from '../data/cakeMenu'

export default function CakesPage() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Our Cakes</h1>

                <Separator className="mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cakeMenu.map((cake) => (
                        <Card key={cake.title} className="overflow-hidden">
                            {/* Image */}
                            {cake.image && (
                                <img
                                    src={cake.image}
                                    alt={cake.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}

                            <CardHeader className="p-4">
                                <CardTitle>{cake.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="p-4 pt-0 text-gray-700">
                                {cake.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
