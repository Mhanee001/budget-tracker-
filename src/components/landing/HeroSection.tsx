import React from 'react';
import { Button } from '@/components/ui/button';
import { FiTrendingUp, FiDollarSign, FiPieChart, FiArrowRight } from 'react-icons/fi';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Financial technology background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-success/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Master Your
            </span>
            <br />
            <span className="text-foreground">Financial Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Take control of your finances with powerful tracking, insightful analytics, 
            and intelligent budgeting tools designed for the modern investor.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 py-8">
            <div className="flex flex-col items-center space-y-2 animate-slide-up">
              <div className="p-4 bg-gradient-landing rounded-full shadow-landing">
                <FiTrendingUp className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Track Growth</span>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-slide-up delay-100">
              <div className="p-4 bg-gradient-landing rounded-full shadow-landing">
                <FiDollarSign className="w-8 h-8 text-success" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Manage Income</span>
            </div>
            <div className="flex flex-col items-center space-y-2 animate-slide-up delay-200">
              <div className="p-4 bg-gradient-landing rounded-full shadow-landing">
                <FiPieChart className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Analyze Spending</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 group"
            >
              Get Started Free
              <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-2 hover:bg-gradient-landing transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-center">
            <div className="space-y-2 animate-fade-in delay-300">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                10,000+
              </div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="space-y-2 animate-fade-in delay-500">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                $2M+
              </div>
              <div className="text-muted-foreground">Money Tracked</div>
            </div>
            <div className="space-y-2 animate-fade-in delay-700">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};