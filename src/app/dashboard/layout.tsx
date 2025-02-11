import { ReactNode } from "react";
import { AppSidebar } from "~/components/app-sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <ScrollArea className="h-[calc(100vh-35px)] px-1">
            {children}
          </ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
