// stores/auth.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useRedirectScheduleStore = defineStore("redurectSchedule", {
  state: () => ({
    upcomingRedirect: ref<string | null>(null),
  }),
  actions: {
    updateRedirectSchedule(nextRoute: string) {
      this.upcomingRedirect = nextRoute;
    },
  },
});
