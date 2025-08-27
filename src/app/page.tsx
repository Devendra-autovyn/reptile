import Header from "@/components/header";
import BalanceCard from "@/components/dashboard/balance-card";
import SecureVaultCard from "@/components/dashboard/secure-vault-card";
import SplitBillCard from "@/components/dashboard/split-bill-card";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import GoalsCard from "@/components/dashboard/goals-card";
import InstantPayCard from "@/components/dashboard/instant-pay-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <BalanceCard />
            </div>
            <SecureVaultCard />
            <SplitBillCard />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-8">
            <GoalsCard />
            <RecentTransactions />
          </div>

        </div>
      </main>
    </div>
  );
}
