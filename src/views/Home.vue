<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
</script>

<template>
    <div v-if="user">
        <h3>Hi {{user.firstName}}!</h3>
        <p>点击左侧的案件列表，选择工作案例</p>
        <!-- <p><router-link to="/users">Manage Users</router-link></p> -->
    </div>
</template>
