import React from 'react';
import LocationPage from './LocationPage';
import { NEIGHBORHOODS } from '../../seoData';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

export default function BairroGravata({ onNavigate }: PageProps) {
  const data = NEIGHBORHOODS.find(n => n.slug === 'bairro-gravata')!;
  return (
    <LocationPage 
      slug={data.slug}
      name={data.name}
      description={data.description}
      distanceToBetoCarrero={data.distanceToBetoCarrero}
      localInfo={data.localInfo}
      deliveryTime={data.deliveryTime}
      deliveryFee={data.deliveryFee}
      onNavigate={onNavigate}
    />
  );
}
