<script setup>
import { Nav, Alert } from '@/components';
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <div class="app-container" :class="authStore.user && 'bg-light'">
        <Nav />
        <Alert />
        <div class="container-fluid text-left" style="position: absolute; left: 0px; padding: 5px;">
            <div class="row justify-content-start">
                <div class="col-2 align-self-start">
                    <div class="btn-group" role="group" aria-label="Cases">
                        <button type="button" class="btn btn-primary">Case 1</button>
                    </div>
                </div>
                <div class="col">
                    <!-- <div class="container pt-4 pb-4"> -->
                    <div>
                        <router-view />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '@/assets/base.css';
</style>