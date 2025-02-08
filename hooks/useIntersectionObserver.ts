import { ref, watchEffect, onUnmounted } from "vue";

export default function useIntersectionObserver(target: any, options = {}) {
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | null = null;

  watchEffect(() => {
    const el = target.value;
    if (!el) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          console.log("element is visible");
        } else {
          console.log("element is invisible");
        }
      },
      { root: null, rootMargin: "200px", threshold: 0.1, ...options }
    );

    observer.observe(el);
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return isIntersecting;
}
