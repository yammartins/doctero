<template>
  <div class="home">
    <div class="container">
      <div class="home-wrapper">
        <h1 class="text-5xl font-bold text-gray-600">
          Build fast, secured and beutuful web-sites.
        </h1>

        <p class="text-base mt-5 text-gray-400">
          Create, build, collaborate and ship products faster. Good bye code! 👋
        </p>

        <Button
          label="Cadastre-se agora"
          medium
          class="mt-16"
        />

        <FormInput
          v-model="form.email"
          type="text"
          name="input"
          label="Olá"
          placeholder="Ok"
        />
      </div>

      <img
        class="home-image"
        src="~/assets/images/header.png"
      >
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/form/input'
export default {
  components: {
    FormInput
  },

  data: () => ({
    form: {
      email: 'dev@doctero.io',
      password: 'password'
    }
  })
}
</script>

<style lang="postcss">
.home {
  @apply flex h-screen items-center;

  &-wrapper {
    @apply max-w-xl;

    p {
      @apply max-w-sm leading-relaxed;
    }

    h1 {
      @apply leading-normal;
    }
  }

  .container {
    @apply flex items-center justify-between;
  }
}
</style>
