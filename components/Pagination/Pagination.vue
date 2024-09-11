<template>
    <div class="pagination">
        <!-- Кнопка для первой страницы -->
        <button 
            v-if="currentPage > 4" 
            @click="changePage(1)" 
            :class="{ 'active': currentPage === 1 }"
            class="page-number"
        >
            1
        </button>

        <!-- Многоточие перед первой страницей -->
        <span v-if="currentPage > 5"> ... </span>

        <!-- Кнопки для текущих страниц -->
        <button 
            v-for="page in pagesToShow" 
            :key="page" 
            :class="{ 'active': page === currentPage }" 
            class="page-number"
            @click="changePage(page)"
        >
            {{ page }}
        </button>

        <!-- Многоточие после последних страниц -->
        <span v-if="currentPage < totalPages - 4"> ... </span>

        <!-- Кнопка для последней страницы -->
        <button 
            v-if="currentPage < totalPages - 3" 
            @click="changePage(totalPages)" 
            :class="{ 'active': currentPage === totalPages }"
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
            default: 12,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
    },
    computed: {
        pagesToShow() {
            const pages = [];
            const maxVisiblePages = 5;
            const half = Math.floor(maxVisiblePages / 2);

            let startPage, endPage;

            if (this.totalPages <= maxVisiblePages) {
                // Все страницы видны
                startPage = 1;
                endPage = this.totalPages;
            } else if (this.currentPage <= half) {
                // Если текущая страница ближе к началу
                startPage = 1;
                endPage = maxVisiblePages;
            } else if (this.currentPage + half >= this.totalPages) {
                // Если текущая страница ближе к концу
                startPage = this.totalPages - maxVisiblePages + 1;
                endPage = this.totalPages;
            } else {
                // Текущая страница в середине
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
                this.$emit('update:page', page);
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
    gap: 10px;
    border-radius: 5px 0px 0px 0px;
    opacity: 1;

    cursor: pointer;
}

.page-number.active {
    width: 40px;
    height: 40px;
    padding: 8px 14px;
    gap: 10px;
    border-radius: 100px;
    border: 1px solid #005DCA;
    color: #005DCA;
    opacity: 1;
  
}

.page-number:hover {
    color: #005DCA;
    
}

.next-button {
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 8px 12px;
    background-color: #ffffff;
    cursor: pointer;
}

.next-button:disabled {
    cursor: not-allowed;
    color: grey;
}

.next-button:hover:not(:disabled) {
    background-color: lightblue;
}
</style>
