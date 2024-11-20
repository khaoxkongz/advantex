import * as React from "react"

import { SiteFooter } from "@/components/share/site-footer"
import { SiteHeader } from "@/components/share/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <React.Fragment>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </React.Fragment>
  )
}
