import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  ClipboardCheck,
  BrainCircuit,
  LineChart,
  WifiOff,
  Globe,
  LayoutDashboard,
} from 'lucide-react';

import { Card } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import playStoreIcon from '../public/googleplay.svg';
import appStoreIcon from '../public/appstore.svg';

const features = [
  {
    label: 'Official Questions',
    description:
      'Practice with real questions from the German Einbürgerungstest, including state-specific ones.',
    icon: BookOpen,
  },
  {
    label: 'Mock Exams',
    description: 'Simulate the actual test experience with timed, randomized mock exams.',
    icon: ClipboardCheck,
  },
  {
    label: 'Smart Study Modes',
    description: 'Learn by category, difficulty, or past mistakes to maximize retention.',
    icon: BrainCircuit,
  },
  {
    label: 'Progress Tracking',
    description: 'View your strengths, weaknesses, and improvement over time with visual insights.',
    icon: LineChart,
  },
  {
    label: 'Offline Access',
    description: 'Download content and study anytime, even without an internet connection.',
    icon: WifiOff,
  },
  {
    label: 'Global Expansion',
    description: 'Built to support citizenship tests for multiple countries — more coming soon.',
    icon: Globe,
  },
  {
    label: 'Simple & Clean Interface',
    description: 'Designed for ease of use with a distraction-free experience.',
    icon: LayoutDashboard,
  },
];

export default function HomePage() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Citizenship Test App Logo"
            width="80"
            height="80"
            className="rounded-(--radius)"
          />
          <h1 className="mt-16 max-w-xl text-balance text-5xl font-medium font-unbounded">
            The Citizenship Test App
          </h1>
          <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
            Taking the next step toward citizenship? Whether you’re preparing for the German
            Einbürgerungstest or future tests in other countries, our app is designed to help you
            succeed with confidence.
          </p>
          <div className="flex flex-col items-center gap-2 *:w-full sm:flex-row sm:*:w-auto">
            <Link href="#">
              <Image priority src={appStoreIcon} alt="Download on the App Store" />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=com.citizenshiptestapp" target="_blank">
              <Image priority src={playStoreIcon} alt="Get It on Google Play" />
            </Link>
          </div>
        </div>
        <section>
          <div className="py-12">
            <div className="mx-auto w-full max-w-5xl">
              <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, i) => (
                  <Card key={i} className="overflow-hidden p-6 bg-secondaryContainer">
                    <feature.icon className="text-primary size-5" />
                    <h3 className="text-foreground mt-2 text-lg font-semibold font-unbounded">
                      {feature.label}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-balance font-roboto">
                      {feature.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
}
