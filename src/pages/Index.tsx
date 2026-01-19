import { useState } from "react";
import { LandingPage } from "@/components/landing/LandingPage";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TransactionForm, Transaction } from "@/components/transactions/TransactionForm";
import { TransactionList } from "@/components/transactions/TransactionList";
import { BalanceChart } from "@/components/dashboard/BalanceChart";
import { formatCurrency } from "@/lib/formatters";
import { useTransactions } from "@/hooks/useTransactions";
import { DollarSign, TrendingUp, TrendingDown, Wallet, Loader2 } from "lucide-react";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const { transactions, loading, addTransaction, deleteTransaction } = useTransactions();

  const handleAuthSuccess = () => {
    setShowDashboard(true);
  };

  if (!showDashboard) {
    return <LandingPage onAuthSuccess={handleAuthSuccess} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading your transactions...</p>
        </div>
      </div>
    );
  }

  const handleAddTransaction = async (newTransaction: Omit<Transaction, 'id'>) => {
    await addTransaction(newTransaction);
  };

  // Calculate totals
  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount;
      } else {
        acc.expense += transaction.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  const balance = totals.income - totals.expense;
  const thisMonth = new Date().getMonth();
  const thisMonthTransactions = transactions.filter(
    t => new Date(t.date).getMonth() === thisMonth
  );
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Balance"
            value={formatCurrency(balance)}
            icon={Wallet}
            trend={{
              value: balance >= 0 ? 12 : -8,
              label: "from last month"
            }}
          />
          <StatsCard
            title="Monthly Income"
            value={formatCurrency(
              thisMonthTransactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0)
            )}
            icon={TrendingUp}
            variant="income"
            trend={{
              value: 8,
              label: "from last month"
            }}
          />
          <StatsCard
            title="Monthly Expenses"
            value={formatCurrency(
              thisMonthTransactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0)
            )}
            icon={TrendingDown}
            variant="expense"
            trend={{
              value: -3,
              label: "from last month"
            }}
          />
          <StatsCard
            title="Total Transactions"
            value={transactions.length.toString()}
            icon={DollarSign}
            trend={{
              value: 15,
              label: "this month"
            }}
          />
        </div>

        {/* Charts */}
        <div className="mb-8">
          <BalanceChart transactions={transactions} />
        </div>

        {/* Transaction Form and List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <TransactionForm onAddTransaction={handleAddTransaction} />
          </div>
          <div>
            <TransactionList transactions={transactions.slice(-10)} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
