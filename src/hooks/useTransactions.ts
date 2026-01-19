import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  onSnapshot, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Transaction } from '@/components/transactions/TransactionForm';
import { useToast } from '@/hooks/use-toast';

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Real-time listener for transactions
  useEffect(() => {
    const q = query(
      collection(db, 'transactions'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const transactionData: Transaction[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          type: doc.data().type,
          amount: doc.data().amount,
          category: doc.data().category,
          description: doc.data().description || '',
          date: doc.data().date,
        }));
        setTransactions(transactionData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching transactions:', error);
        toast({
          title: 'Error',
          description: 'Failed to load transactions. Please check your connection.',
          variant: 'destructive',
        });
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [toast]);

  // Add a new transaction
  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      await addDoc(collection(db, 'transactions'), {
        ...transaction,
        createdAt: Timestamp.now(),
      });
      return true;
    } catch (error) {
      console.error('Error adding transaction:', error);
      toast({
        title: 'Error',
        description: 'Failed to add transaction. Please try again.',
        variant: 'destructive',
      });
      return false;
    }
  };

  // Delete a transaction
  const deleteTransaction = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'transactions', id));
      toast({
        title: 'Deleted',
        description: 'Transaction has been removed.',
      });
      return true;
    } catch (error) {
      console.error('Error deleting transaction:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete transaction. Please try again.',
        variant: 'destructive',
      });
      return false;
    }
  };

  return {
    transactions,
    loading,
    addTransaction,
    deleteTransaction,
  };
}
