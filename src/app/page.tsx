import Header from "@/components/header";
import BalanceCard from "@/components/dashboard/balance-card";
import InstantPayCard from "@/components/dashboard/instant-pay-card";
import SecureVaultCard from "@/components/dashboard/secure-vault-card";
import SplitBillCard from "@/components/dashboard/split-bill-card";
import RecentTransactions from "@/components/dashboard/recent-transactions";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-3 space-y-8">
            <BalanceCard />
            <InstantPayCard />
          </div>

          <div className="xl:col-span-2 space-y-8">
             <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-8">
              <SecureVaultCard />
              <SplitBillCard />
            </div>
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
}
