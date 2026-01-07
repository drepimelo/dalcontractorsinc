
import React from 'react';

export type Page = 'home' | 'services' | 'gallery' | 'about';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  details: string[];
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  image: string;
}

export type ProjectCategory = 'All' | 'Kitchens' | 'Bathrooms' | 'Additions' | 'Exteriors';

export interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  imageUrl: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}
