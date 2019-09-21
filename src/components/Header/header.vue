<template>
    <nav class="header">
        <ul>
            <li>
                <a href="/" class="logo">
                    <img :src="logo" alt="Intricately Company">
                </a>
            </li>
            <li>
                <input type="text" placeholder="Search Companies">
            </li>
            <li>
                OR
            </li>
            <li>
                <button>NEW SMARTLIST</button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
    import logo from 'Images/logo-pink.png'

    export default {
        data: () => Object({ logo })
    }
</script>