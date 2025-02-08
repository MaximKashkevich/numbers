import { defineStore } from "pinia";
import { ref } from "vue";
import { useDropdownStore } from "~/stores/dropdownStore";
import { usePlateStore } from "./plateStore";
import { toRaw } from "vue";

export const usePhoneFetchStore = defineStore("phoneFetch", () => {
  const dropdownStore = useDropdownStore();
  const plateStore = usePlateStore();

  const filterParams = ref({
    operator: "Du",
    code: "052",
    sort: "Latest",
    page: 1,
  });

  const fetchFilteredPhones = async () => {
    const selectedOperator = dropdownStore.operatorList.find(
      (item) => item.name === filterParams.value.operator
    );

    plateStore.fetchPhone(
      toRaw({
        ...filterParams.value,
        operator: selectedOperator ? selectedOperator.id : 1,
        order: filterParams.value.sort === "Latest" ? "desc" : "asc",
      })
    );
  };

  return {
    filterParams,
    fetchFilteredPhones,
  };
});
