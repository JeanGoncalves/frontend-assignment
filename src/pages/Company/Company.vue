<template>
    <div>
        <Container>
            <Breadcrumb />
        </Container>
        <Container class="container__horizontal">
            <NavList v-bind:list="list"/>
            <RouterView />
        </Container>
    </div>
</template>

<script>
    import Breadcrumb from 'Components/Breadcrumb'
    import Container from 'Components/Container'
    import NavList from 'Components/NavList'

    export default {
        components: {
            Breadcrumb,
            Container,
            NavList
        },
        data: function () {
            return {
                list: ['data', 'table', 'page']
            }
        }
    }
</script>