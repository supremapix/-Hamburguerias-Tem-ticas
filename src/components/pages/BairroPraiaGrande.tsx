import React from 'react';
import LocationPage from './LocationPage';
import { NEIGHBORHOODS } from '../../seoData';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

export default function BairroPraiaGrande({ onNavigate }: PageProps) {
  const data = NEIGHBORHOODS.find(n => n.slug === 'bairro-praia-grande')!;
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
