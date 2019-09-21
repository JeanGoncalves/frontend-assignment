<template>
    <div>
        <div class="company-page company-page__opacity"></div>
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script>
    import Header from 'Components/Header'
    import Footer from 'Components/Footer'

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>