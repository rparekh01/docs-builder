interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <nav className="bg-blue-400">Auth navbar</nav>
      {children}
    </div>
  );
}
