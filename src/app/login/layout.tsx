export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#1a1a2e] w-screen h-screen">
      {children}
    </div>
  );
}
