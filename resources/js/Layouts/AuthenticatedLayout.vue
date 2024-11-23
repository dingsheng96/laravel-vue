<script setup lang="ts">
import { CircleUser } from "lucide-vue-next";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";

// Import components from the custom library
import { Separator } from "@/components/ui/separator";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const data = {
    navMain: [
        {
            title: "Getting Started",
            url: "#",
            items: [{ title: "Dashboard", url: "#" }],
        },
    ],
};
</script>

<template>
    <SidebarProvider>
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div class="flex items-center gap-2">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                            >
                                <ApplicationLogo
                                    class="fill-current text-indigo-800"
                                />
                            </div>
                            <div class="flex flex-col gap-0.5 leading-none">
                                <span class="font-semibold">Laravel Vue</span>
                            </div>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup v-for="item in data.navMain" :key="item.title">
                    <SidebarGroupLabel>{{ item.title }}</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                            >
                                <SidebarMenuButton
                                    :class="{ 'is-active': subItem.isActive }"
                                    as-child
                                >
                                    <a :href="subItem.url">{{
                                        subItem.title
                                    }}</a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>

        <SidebarInset>
            <header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger class="-ml-1" />
                <Separator orientation="vertical" class="mr-2 h-4" />
                <div class="relative ml-auto flex-1 md:grow-0">
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button
                                variant="secondary"
                                size="icon"
                                class="rounded-full"
                            >
                                <CircleUser class="h-5 w-5" />
                                <span class="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    v-bind:href="route('logout')"
                                    method="post"
                                    >Logout</Link
                                >
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4">
                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>
