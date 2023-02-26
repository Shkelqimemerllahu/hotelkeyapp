<script setup>
import { defineProps, computed } from "vue";

const { showCartonFunction, data, deleteItem, studentId } = defineProps([
  "showCartonFunction",
  "data",
  "deleteItem",
  "studentId",
]);

function onCancel() {
  showCartonFunction();
}

const selectedStudent = computed(() => {
  return data.find((d) => d.id === studentId);
});
</script>

<template>
  <div
    class="modal"
    tabindex="0"
    role="dialog"
    aria-labelledby="deleteConfirmationModalLabel"
    aria-hidden="false"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteConfirmationModalLabel">
            <img
              class="img-trash-custom-css"
              src="../assets/trash.png"
              alt=""
            />
          </h5>
          <p type="button">
            <span @click="onCancel">X</span>
          </p>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="onCancel">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteItem(selectedStudent)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block !important;
  position: absolute !important;
  max-width: 100% !important;
  max-height: 100% !important;
  background-color: rgba(72, 72, 72, 0.77) !important;
  z-index: 20 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.img-trash-custom-css {
  width: 22px;
  height: auto;
}

.modal-dialog {
  display: flex;
  width: 550px;
  height: auto;
}
</style>
