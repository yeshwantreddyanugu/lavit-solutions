export interface DivisionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  stats?: string;
  delay?: number;
}

export interface ProjectProps {
  id: string;
  title: string;
  type: string;
  scale: string;
  imageSrc: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  type?: 'fadeIn' | 'slideIn' | 'slideUp' | 'scale';
}