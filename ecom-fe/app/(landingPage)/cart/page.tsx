'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const mockCartItems = [
    { name: "Chocolate Cake", quantity: 2, price: 25 },
    { name: "Vanilla Cupcake", quantity: 3, price: 5 },
    { name: "Red Velvet Cake", quantity: 1, price: 30 },
]

export default function CartPage() {
    const calculateTotal = () =>
        mockCartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                <Separator className="mb-6" />

                <div className="grid grid-cols-1 gap-4">
                    {mockCartItems.map((item, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                                    <p className="text-gray-700">Price: ${item.price}</p>
                                </div>
                                <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-end mt-6 items-center gap-6">
                    <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
                    <Button size="lg">Checkout</Button>
                </div>
            </div>
        </div>
    )
}
