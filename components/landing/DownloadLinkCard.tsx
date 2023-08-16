import Link from "next/link"
import { ReactNode } from "react"

interface DownloadLinkCardProps {
  downloadText: string
  downloadLink?: string
  children: ReactNode
}

function Card({ text, children }: { text: string; children: ReactNode }) {
  return (
    <div className="home-download-card bg-white home-common-blurb d-flex flex-column align-items-center justify-content-center gap-1 text-secondary-5 m-1">
      {children}
      {text}
    </div>
  )
}

export default function DownloadLinkCard({ downloadText, downloadLink, children }: DownloadLinkCardProps) {
  return (
    <>
      {downloadLink ? (
        <Link href={"/" + downloadLink} className="text-decoration-none">
          <Card text={downloadText} children={children} />
        </Link>
      ) : (
        <Card text={downloadText} children={children} />
      )}
    </>
  )
}
