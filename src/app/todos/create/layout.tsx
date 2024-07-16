export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col items-center mx-20 h-screen justify-center">
        {children}
      </div>
    </>
  );
}
