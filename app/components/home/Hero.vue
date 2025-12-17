<script setup>
import { AreaChart } from 'lucide-vue-next'
import { GitHubIcon } from 'vue3-simple-icons'

const { title, description, github } = useAppConfig()
</script>

<template>
  <main
    class="
      grid place-items-center pt-8 pb-8
      md:py-12
      lg:grid-cols-2
    "
  >
    <div>
      <h1
        class="
          text-5xl font-bold
          lg:text-6xl lg:tracking-tight
          xl:text-7xl xl:tracking-tighter
        "
      >
        {{ title }}
      </h1>
      <p class="mt-4 max-w-xl text-lg text-slate-600">
        {{ description }}
      </p>
      <div
        class="
          mt-6 flex flex-col gap-3
          sm:flex-row
        "
      >
        <HomeLink
          href="/dashboard"
          title="Dashboard"
          class="flex items-center justify-center gap-1"
          rel="noopener"
        >
          <AreaChart
            class="h-5 w-5"
          />
          {{ $t('dashboard.title') }}
        </HomeLink>
        <HomeLink
          size="lg"
          type="outline"
          rel="noopener"
          :href="github"
          title="Github"
          class="flex items-center justify-center gap-1"
          target="_blank"
        >
          <GitHubIcon
            class="h-5 w-5"
          />
          GitHub Repo
        </HomeLink>
      </div>
    </div>
    <div
      class="
        hidden py-6
        md:block
      "
    >
      <img
        class="w-[512px]"
        src="@/assets/images/LostDream.png"
      />
    </div>
  </main>
</template>
