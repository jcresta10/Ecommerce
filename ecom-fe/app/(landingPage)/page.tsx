'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

type Tea = {
  id: number;
  name: string;
  description: string;
  type: string;
  ingredients: string[];
  image?: string;
  price?: number;
};

export default function TeaPage() {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    axios.get<Tea[]>(`${process.env.NEXT_PUBLIC_API_URL}/tea`)
      .then((res) => setTeas(res.data))
      .catch(() => setError('Failed to fetch teas'))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (tea: Tea) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...existingCart, tea]));
    router.push('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">🍵 Our Tea Selection</h1>
        <Separator className="mb-6" />

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        )}

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teas.map((tea) => (
            <Card key={tea.id} className="overflow-hidden relative border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              {tea.image && (
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-48 object-cover"
                />
              )}

              <CardHeader className="p-4">
                <CardTitle>{tea.name}</CardTitle>
              </CardHeader>

              <CardContent className="p-4 pt-0 text-gray-700">
                <HoverCard>
                  <HoverCardTrigger>
                    <p className="line-clamp-3 cursor-pointer">{tea.description}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64">
                    <h4 className="font-semibold mb-2">Ingredients:</h4>
                    <ul className="list-disc list-inside">
                      {tea.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  </HoverCardContent>
                </HoverCard>

                <div className="mt-4 flex justify-between items-center">
                  {tea.price && <span className="font-semibold">${tea.price.toFixed(2)}</span>}
                  <Button size="sm" onClick={() => addToCart(tea)}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
