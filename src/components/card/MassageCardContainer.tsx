import React from 'react'
import MassageCard from './MassageCard'
import MassageCarData from '@/data/massageCardData.json'

interface massageCardData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }

export default function MassageCardContainer() {
    return (
        <div className="container mx-auto px-4 my-12">
          <div className="flex flex-wrap -mx-4">
            {MassageCarData.map((card: massageCardData) => (
              <MassageCard
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                imageAlt={card.imageAlt}
              />
            ))}
          </div>
        </div>
      );
    };