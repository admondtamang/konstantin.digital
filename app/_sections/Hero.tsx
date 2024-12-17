import { CheckCircle } from 'lucide-react';

import { Button } from '@/components/Button';
import { Hero } from '@/components/Hero';
import { ThemeToggle } from '@/components/ThemeToggle';
import { AvatarBubble } from '@/components/Avatar';
import { FreshEyesAuditSchedulingLink } from '@/config/navigation.config';

export const HeroSection = () => {
  return (
    <div className="px-container relative mx-auto mb-20 mt-8 max-w-container">
      <Hero
        title={HeroTitle}
        description="Transforming visions into production-ready features that drive growth. Perfect for startups and scale-ups."
        actions={HeroActions}
      />
      <ThemeToggle className="absolute -bottom-10 left-0 md:bottom-0" />
    </div>
  );
};

const HeroTitle = (
  <div className="relative">
    <AvatarBubble className="absolute -right-44 -top-16 hidden lg:block" />
    <span className="block text-violet">Crafting Code,</span>
    <span className="block">Building Ideas.</span>
  </div>
);

const HeroActions = (
  <div className="mt-6 flex-col items-center justify-center text-center">
    <Button as="a" href={`${FreshEyesAuditSchedulingLink}?source=Hero`}>
      Schedule a meet
    </Button>
    <div className="mb-12 mt-6 flex justify-center gap-4 text-sm opacity-50">
      <span className="flex items-center gap-1">
        <CheckCircle size={18} /> 20min call
      </span>
    </div>
  </div>
);
