import Header from "@/components/header";
import BalanceCard from "@/components/dashboard/balance-card";
import SecureVaultCard from "@/components/dashboard/secure-vault-card";
import SplitBillCard from "@/components/dashboard/split-bill-card";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import GoalsCard from "@/components/dashboard/goals-card";
import InstantPayCard from "@/components/dashboard/instant-pay-card";
import { redirect } from 'next/navigation';
import Footer from "@/components/footer";

export default function Home() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          <div className="lg:col-span-2 flex flex-col gap-8">
            <BalanceCard />
            <div className="grid md:grid-cols-2 gap-8">
              <InstantPayCard />
              <SecureVaultCard />
            </div>
            <RecentTransactions />
          </div>

          <div className="lg:col-span-1 flex flex-col gap-8">
            <SplitBillCard />
            <GoalsCard />
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
