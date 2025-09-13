import { Wallet } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
            <Wallet className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Treasure Track</h1>
            <p className="text-primary-foreground/80 text-sm">Your Personal Finance Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}