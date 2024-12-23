import { User } from "@/types";
import { ColumnDef } from "@tanstack/vue-table";
import { h } from "vue";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: () => h("div", { class: "text-right" }, "Amount"),
        cell: ({ row }) => {
            const amount = Number.parseFloat(row.getValue("amount"));
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount);

            return h("div", { class: "text-right font-medium" }, formatted);
        },
    },
];
