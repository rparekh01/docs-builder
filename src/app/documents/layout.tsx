interface DocumentsLayoutProps {
  children: React.ReactNode;
}

export default function DocumentLayout({ children }: DocumentsLayoutProps) {
  return <div>{children}</div>;
}
