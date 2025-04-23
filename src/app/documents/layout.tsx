interface DocumentsLayoutProps {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentsLayoutProps) {
  return (
    <div>
      <nav className="bg-blue-500">Document navbar</nav>
      {children}
    </div>
  );
}
