'use-client';

export function TabCard({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: number;
}) {
  return (
    <div
      key={id}
      className="cursor-pointer bg-ctp-crust ctp-macchiato border border-ctp-lavender rounded-lg shadow-lg flex justify-between p-3"
    >
      {children}
    </div>
  );
}
