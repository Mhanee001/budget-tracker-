import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Transaction } from "./TransactionForm";
import { formatCurrency } from "@/lib/formatters";
import { Calendar, Tag, FileText } from "lucide-react";

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (transactions.length === 0) {
    return (
      <Card className="border-border bg-gradient-card shadow-card">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <FileText className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No transactions yet</h3>
          <p className="text-muted-foreground text-center">
            Start by adding your first income or expense to see it here.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border bg-gradient-card shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {sortedTransactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border bg-background/50 hover:bg-background/80 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge 
                  variant={transaction.type === 'income' ? 'default' : 'secondary'}
                  className={
                    transaction.type === 'income'
                      ? 'bg-income/10 text-income border-income/20'
                      : 'bg-expense/10 text-expense border-expense/20'
                  }
                >
                  {transaction.type}
                </Badge>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" />
                  {transaction.category}
                </div>
              </div>
              
              {transaction.description && (
                <p className="text-sm text-muted-foreground mb-2">
                  {transaction.description}
                </p>
              )}
              
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {new Date(transaction.date).toLocaleDateString()}
              </div>
            </div>
            
            <div className="text-right">
              <div 
                className={`text-lg font-semibold ${
                  transaction.type === 'income' ? 'text-income' : 'text-expense'
                }`}
              >
                {transaction.type === 'income' ? '+' : '-'}
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}