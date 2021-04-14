<template>
  <div class="app">
    <nav class="head">
      <div class="head-wrapper">
        <NuxtLink to="/">
          <img src="~/assets/svgs/logo.svg">
        </NuxtLink>

        <div class="head-menu">
          <NuxtLink
            v-for="{ route, label } in routes"
            :key="label"
            :to="route"
            v-text="label"
          />
        </div>

        <Button label="Hello" medium />
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>

export default {
  computed: {
    routes () {
      const routes = [
        {
          label: 'Soluções',
          route: '/solutions'
        },
        {
          label: 'Sobre nós',
          route: '/about'
        },
        {
          label: 'Contato',
          route: '/contact'
        }
      ]

      return routes
    }
  }
}
</script>

<style lang="postcss">
.head {
  @apply py-8 fixed w-full;

  &-menu {
    @apply flex ml-12 items-center space-x-8;

    a {
      @apply transition-all text-base font-semibold text-gray-600 duration-300 hover:text-blue;
    }
  }

  &-wrapper {
    @apply flex w-full container items-center;
  }

  .button {
    @apply ml-auto;
  }
}
</style>
