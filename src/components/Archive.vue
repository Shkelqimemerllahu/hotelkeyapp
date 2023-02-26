<script setup>
import axios from "axios";
import { ref, onMounted, computed, watch } from "vue";
import Header from "./Header.vue";
import Navbar from "./Navbar.vue";
const currentPage = ref(1);
const itemsPerPage = ref(5);
const sortDirection = ref(1);
const sortKey = ref("id");

//Call data from archive
const archive = ref([]);
onMounted(async () => {
  await axios("http://localhost:5000/archive").then((response) => {
    archive.value = response.data;
  });
});

//Sortable
const sortTable = (key) => {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value * -1;
  } else {
    sortKey.value = key;
    sortDirection.value = 1;
  }
};
//Pagination and Sortable
const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;
  return archive.value.slice(startIndex, endIndex).sort((a, b) => {
    let modifier = 1;
    if (sortDirection.value === -1) modifier = -1;
    if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier;
    if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier;
  });
});
const totalPages = computed(() => {
  return Math.ceil(archive.value.length / itemsPerPage.value);
});
const pages = computed(() => {
  const pagesArray = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pagesArray.push(i);
  }
  return pagesArray;
});

function changePage(page) {
  currentPage.value = page;
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}
function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

//Search bar
const findStudents = ref([]);
axios.get("http://localhost:5000/archive").then((response) => {
  findStudents.value = response.data;
});
const search = ref("");
watch(search, () => {
  archive.value = findStudents.value.filter((student) =>
    student.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

//Restore
const studentId = ref(-1);
async function deleteItem(student) {
  await axios.post(` http://localhost:5000/data`, student);
  await axios.delete(`http://localhost:5000/archive/${studentId.value}`, {
    timeout: 6000,
  });
  archive.value = archive.value.filter(
    (student) => student.id !== studentId.value
  );
}

const handleClick = (id, index) => {
  studentId.value = id;
  deleteItem(archive.value[index]);
};
</script>

<template>
  <Header />
  <Navbar />
  <div class="container vh-100">
    <div class="form-inline">
      <input
        v-model.trim="search"
        class="form-control mr-sm-2 search-custom-css"
        type="search"
        placeholder="Search Students..."
        aria-label="Search"
      />
    </div>
    <table class="table table-bordered">
      <thead class="table-light">
        <tr>
          <th scope="col">
            Index
            <img
              src="../assets/arrow-down-up.svg"
              alt="SortDown"
              @click="sortTable('id')"
            />
          </th>
          <th scope="col">
            Name
            <img
              src="../assets/arrow-down-up.svg"
              alt="SortDown"
              @click="sortTable('name')"
            />
          </th>
          <th scope="col">
            Date of Birth
            <img
              src="../assets/arrow-down-up.svg"
              alt="SortDown"
              @click="sortTable('date')"
            />
          </th>
          <th scope="col">
            City
            <img
              src="../assets/arrow-down-up.svg"
              alt="SortDown"
              @click="sortTable('city')"
            />
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(students, index) in displayedItems"
          :key="students.id"
          :class="index % 2 === 0 ? 'table-light' : 'table-secondary'"
        >
          <td>{{ students.id }}</td>
          <td>{{ students.name }}</td>
          <td>{{ students.date }}</td>
          <td>{{ students.city }}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="handleClick(students.id, index)"
            >
              Restore
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button
        class="page-link"
        :disabled="currentPage === 1"
        @click="previousPage"
      >
        Previous
      </button>
      <button
        v-for="page in pages"
        :key="page"
        class="page-link"
        :class="{ active: currentPage === page }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button
        class="page-link"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
</template>
<style scoped>
.table-bordered {
  border: 3px solid #dee2e6;
}

.table-light th {
  background-color: #f8f9fa;
}

.table-light th,
.table-light td {
  border: none;
}

.search-custom-css {
  width: 250px;
}

td,
th {
  text-align: center;
}
.active {
  background-color: blueviolet;
  border: none;
  color: blue;
}
.form-inline {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
