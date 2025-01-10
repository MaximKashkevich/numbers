<template>
  <div class="pagination">
    <button
      v-if="currentPage > 4"
      @click="changePage(1)"
      :class="{ active: currentPage === 1 }"
      class="page-number"
    >
      1
    </button>

    <span v-if="currentPage > 5"> ... </span>

    <button
      v-for="page in pagesToShow"
      :key="page"
      :class="{ active: page === currentPage }"
      class="page-number"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <span v-if="currentPage < totalPages - 4"> ... </span>

    <button
      v-if="currentPage < totalPages - 3"
      @click="changePage(totalPages)"
      :class="{ active: currentPage === totalPages }"
      class="page-number"
    >
      {{ totalPages }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true, // Обязательно указывать общее количество страниц
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentPage() {
      return this.modelValue;
    },
    pagesToShow() {
      const pages = [];
      const maxVisiblePages = 5;
      const half = Math.floor(maxVisiblePages / 2);

      let startPage, endPage;

      if (this.totalPages <= maxVisiblePages) {
        startPage = 1;
        endPage = this.totalPages;
      } else if (this.currentPage <= half) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (this.currentPage + half >= this.totalPages) {
        startPage = this.totalPages - maxVisiblePages + 1;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - half;
        endPage = this.currentPage + half;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit("update:modelValue", page);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 10px;
  align-items: center;
}

.page-number {
  width: 40px;
  height: 40px;
  padding: 8px 14px;
  border-radius: 5px;
  cursor: pointer;
}

.page-number.active {
  border: 1px solid #005dca;
  color: #005dca;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page-number:hover {
  color: #005dca;
}
</style>
