import Header from "@/components/header";
import BalanceCard from "@/components/dashboard/balance-card";
import SecureVaultCard from "@/components/dashboard/secure-vault-card";
import SplitBillCard from "@/components/dashboard/split-bill-card";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import GoalsCard from "@/components/dashboard/goals-card";
import InstantPayCard from "@/components/dashboard/instant-pay-card";
import { redirect } from "next/navigation";
import Footer from "@/components/footer";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen font-body">
      <Header />
      <TracingBeam>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-screen-2xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BalanceCard />
            </div>
            <InstantPayCard />
            <SecureVaultCard />
            <div className="lg:col-span-2">
              <RecentTransactions />
            </div>
            <div className="lg:col-span-2">
              <SplitBillCard />
            </div>
              <GoalsCard />
          </div>
        </main>
      </TracingBeam>
      <div className="p-1">
        <Footer />
      </div>
    </div>
  );
}
