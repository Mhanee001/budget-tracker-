import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
  };
  variant?: 'default' | 'income' | 'expense';
}

export function StatsCard({ title, value, icon: Icon, trend, variant = 'default' }: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'income':
        return 'border-income/20 bg-gradient-to-br from-income/5 to-income/10';
      case 'expense':
        return 'border-expense/20 bg-gradient-to-br from-expense/5 to-expense/10';
      default:
        return 'border-border bg-gradient-card';
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case 'income':
        return 'text-income bg-income/10';
      case 'expense':
        return 'text-expense bg-expense/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  return (
    <Card className={`transition-all duration-300 hover:shadow-hover animate-fade-in ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${getIconStyles()}`}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {trend && (
          <p className="text-xs text-muted-foreground">
            <span className={trend.value >= 0 ? 'text-income' : 'text-expense'}>
              {trend.value >= 0 ? '+' : ''}{trend.value}%
            </span>
            {' '}
            {trend.label}
          </p>
        )}
      </CardContent>
    </Card>
  );
}