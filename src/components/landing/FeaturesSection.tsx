import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FiBarChart, 
  FiShield, 
  FiSmartphone, 
  FiBell, 
  FiTarget, 
  FiUsers 
} from 'react-icons/fi';
import workspaceImg from '@/assets/workspace.jpg';

const features = [
  {
    icon: FiBarChart,
    title: 'Advanced Analytics',
    description: 'Get detailed insights into your spending patterns with beautiful charts and reports.',
    color: 'text-primary'
  },
  {
    icon: FiShield,
    title: 'Bank-Level Security',
    description: 'Your financial data is protected with enterprise-grade encryption and security.',
    color: 'text-success'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Optimized',
    description: 'Access your finances anywhere with our responsive design and mobile app.',
    color: 'text-accent'
  },
  {
    icon: FiBell,
    title: 'Smart Notifications',
    description: 'Stay on top of your finances with intelligent alerts and reminders.',
    color: 'text-expense'
  },
  {
    icon: FiTarget,
    title: 'Goal Setting',
    description: 'Set and track financial goals with our intuitive goal management system.',
    color: 'text-primary'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Share budgets and collaborate with family members or business partners.',
    color: 'text-success'
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-foreground">for Smart Money Management</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take control of your finances, make informed decisions, 
            and achieve your financial goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 bg-gradient-landing border-0 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-background rounded-full shadow-landing group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Built for
              </span>
              <br />
              Modern Finance
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform combines cutting-edge technology with intuitive design 
              to create the ultimate financial management experience. Whether you're 
              tracking daily expenses or planning for retirement, we've got you covered.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">Real-time transaction tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span className="text-foreground">Automatic categorization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Multi-currency support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-expense rounded-full" />
                <span className="text-foreground">Export to popular formats</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-landing">
              <img 
                src={workspaceImg} 
                alt="Modern workspace with financial charts" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-success/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};