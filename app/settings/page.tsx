import DashboardLayout from "@/components/layout/DashboardLayout";
import TreasuryReserveSettings from "@/components/features/settings/TreasuryReserveSettings";

function SettingsPage() {
  return (
    <DashboardLayout>
      <TreasuryReserveSettings />
    </DashboardLayout>
  );
}

export default SettingsPage;
