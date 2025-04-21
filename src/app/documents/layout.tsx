
interface DocumentsLayoutProps {
    children: React.ReactNode;
}

export default function DocumentLayout ({children}:DocumentsLayoutProps){

    return <div><nav className="bg-red-400">Document navbar</nav>{children}</div>
}