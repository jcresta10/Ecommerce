'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

type CartItem = {
    id: number
    name: string
    price: number
    quantity: number
    image?: string
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]')
        // Aggregate duplicates by id
        const aggregated = storedCart.reduce((acc: CartItem[], item: any) => {
            const existing = acc.find(i => i.id === item.id)
            if (existing) {
                existing.quantity += 1
            } else {
                acc.push({ ...item, quantity: 1, price: item.price || 20 }) // default price if not set
            }
            return acc
        }, [])
        setCartItems(aggregated)
    }, [])

    const removeFromCart = (id: number) => {
        const updated = cartItems.filter(item => item.id !== id)
        setCartItems(updated)
        localStorage.setItem('cart', JSON.stringify(updated))
    }

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                <Separator className="mb-6" />

                {cartItems.length === 0 && (
                    <p className="text-gray-600 text-center">Your cart is empty.</p>
                )}

                <div className="grid grid-cols-1 gap-4">
                    {cartItems.map((item) => (
                        <Card key={item.id}>
                            <CardHeader className="flex items-center gap-4">
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                )}
                                <CardTitle>{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex justify-between items-center">
                                <div>
                                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                                    <p className="text-gray-700">Price: ${item.price}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
                                    <Button
                                        size="sm"
                                        variant="destructive"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {cartItems.length > 0 && (
                    <div className="flex justify-end mt-6 items-center gap-6">
                        <p className="text-xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
                        <Button size="lg">Checkout</Button>
                    </div>
                )}
            </div>
        </div>
    )
}
