<script setup>
import { ref, defineProps, watch } from "vue";
const { showForm, editValue } = defineProps(["showForm", "editValue"]);

//Editable
const conditionName = ref(editValue.editValueUser.name);
watch(
  conditionName,
  () => (editValue.editValueUser.name = conditionName.value)
);

const conditionData = ref(editValue.editValueUser.date);
watch(conditionData, () => {
  editValue.editValueUser.date = conditionData.value;
});

const conditionCity = ref(editValue.editValueUser.city);
watch(
  (conditionCity,
  () => {
    editValue.editValueUser.city = conditionCity.value;
  })
);
</script>
<template>
  <div class="custom-container container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title mb-4">Edit Person</h5>
            <form>
              <div class="mb-3">
                <label for="nameInput" class="form-label">Name</label>
                <input
                  v-model="conditionName"
                  type="text"
                  class="form-control"
                  id="nameInput"
                  placeholder="Enter name"
                />
              </div>
              <div class="mb-3">
                <label for="dobInput" class="form-label">Date of Birth</label>
                <input
                  type="date"
                  v-model="conditionData"
                  class="form-control"
                  id="dobInput"
                />
              </div>
              <div class="mb-3">
                <label for="cityInput" class="form-label">City</label>
                <input
                  v-model="conditionCity"
                  type="text"
                  class="form-control"
                  id="cityInput"
                  placeholder="Enter city"
                />
              </div>
              <div class="text-end">
                <button
                  type="button"
                  class="btn btn-primary me-2"
                  @click="editValue.updateUser"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="showForm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  align-items: center;
  justify-content: center;
}
</style>
