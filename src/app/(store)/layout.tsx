import { IconBell, IconMail } from "@tabler/icons-react";
import { ReactNode } from "react";
import { AppSidebar } from "~/components/app-sidebar";
import { DateRangePicker } from "~/components/date-range-picker";
import { ScrollArea } from "~/components/ui/scroll-area";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";
import { StoreCommad } from "./components/store-commnad";

interface Props {
  children: ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 w-full shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <StoreCommad />
            <div className="flex items-center gap-4 text-muted-foreground">
              <DateRangePicker />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <ScrollArea className="h-[calc(100vh-100px)] px-1">
            {children}
          </ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
