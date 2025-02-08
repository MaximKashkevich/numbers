import { defineStore } from "pinia";
import { ref } from "vue";
import { useDropdownStore } from "~/stores/dropdownStore";
import { usePlateStore } from "./plateStore";
import { toRaw } from "vue";

export const usePlateFetchStore = defineStore("plateFetch", () => {
  const dropdownStore = useDropdownStore();
  const plateStore = usePlateStore();

  const filterParams = ref({
    emirate: "Dubai",
    code: "A",
    sort: "Latest",
    page: 1,
  });

  const fetchFilteredPlates = async () => {
    const selectedEmirate = dropdownStore.emirateList.find(
      (item) => item.name === filterParams.value.emirate
    );

    plateStore.fetchPlate(
      toRaw({
        ...filterParams.value,
        emirate: selectedEmirate ? selectedEmirate.id : 1,
        order: filterParams.value.sort === "Latest" ? "desc" : "asc",
      })
    );
  };

  return {
    filterParams,
    fetchFilteredPlates,
  };
});
