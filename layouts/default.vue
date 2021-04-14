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

        <div class="head-actions">
          <NuxtLink to="/signup">
            <Button label="Registrar" medium secondary />
          </NuxtLink>

          <NuxtLink to="/auth">
            <Button label="Entrar" medium />
          </NuxtLink>
        </div>
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

  &-menu,
  &-actions,
  &-wrapper {
    @apply flex items-center;
  }

  &-menu {
    @apply ml-12 space-x-8;

    a {
      @apply transition-all text-base font-semibold text-gray-600 duration-300 hover:text-blue;
    }
  }

  &-actions {
    @apply ml-auto space-x-4;
  }

  &-wrapper {
    @apply w-full container;
  }
}
</style>
