"use client";

import {
  IconBackpack,
  IconDevices,
  IconGift,
  IconLayoutBoard,
  IconReport,
  IconSend,
  IconSettingsCheck,
  IconShoppingBag,
  IconTerminal2,
  IconUsersGroup,
  IconWorldPin,
} from "@tabler/icons-react";

import * as React from "react";

import { NavMain } from "~/components/nav-main";
import { NavProjects } from "~/components/nav-projects";
import { NavSecondary } from "~/components/nav-secondary";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/overview",
      icon: IconLayoutBoard,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: IconShoppingBag,
      isActive: true,
    },
    {
      title: "Products",
      url: "#",
      icon: IconBackpack,
      items: [
        {
          title: "Collections",
          url: "#",
        },
        {
          title: "Inventory",
          url: "#",
        },
        {
          title: "Purchase Orders",
          url: "#",
        },
        {
          title: "Gift cards",
          url: "#",
        },
      ],
    },
    {
      title: "Customers",
      url: "/orders",
      icon: IconUsersGroup,
    },
    {
      title: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      title: "Discount",
      url: "#",
      icon: IconGift,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettingsCheck,
    },
    {
      title: "Feedback",
      url: "#",
      icon: IconSend,
    },
  ],
  projects: [
    {
      name: "Online Store",
      url: "#",
      icon: IconWorldPin,
    },
    {
      name: "Point of Sale",
      url: "#",
      icon: IconDevices,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-cyan-600 text-sidebar-primary-foreground">
                  <IconTerminal2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">24svcs</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
