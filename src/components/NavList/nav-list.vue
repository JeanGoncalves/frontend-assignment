<template>
    <nav class="nav-list">
        <ul v-bind:key="item" v-for="item in list">
            <router-link
                :to="item.path"
                v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                <li
                    :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
                >
                    <a :href="href" @click="navigate">{{ route.meta.label }}</a>
                </li>
                </router-link>
            <li>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    export default {
        props: ['list']
    }
</script>