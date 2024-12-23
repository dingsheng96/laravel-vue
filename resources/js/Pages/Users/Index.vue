<script setup lang="ts" generic="TData, TValue">
import DataTable from "@/components/ui/data-table/DataTable.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";

defineProps({ users: Array });
</script>

<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <div class="container py-10 mx-auto">
            <DataTable :columns="columns" :data="data" />
        </div>
    </AuthenticatedLayout>
</template>
