<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);
    const count = ref<number>(3)
    const title = ref<string>('')
    const description = ref<string>('')

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      visible.value = false;
    };
    return {
      title,
      description,
      count,
      visible,
      showModal,
      handleOk,
    };
  },
});
</script>

<template>
  <div class="card">
    Сегодня
  </div>

  <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
    <a-button type="primary" @click="showModal">Добавить задачу</a-button>

    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" ok-text="Добавить" cancel-text="Закрыть">
      <a-input v-model:value="title" placeholder="Заголовок" class="card__modal-title-input"/>
      <a-textarea :rows="4" v-model:value="description" placeholder="Описание" />
    </a-modal>
  </ul>
  <div>{{ count }} tasks</div>
</template>

<style scoped>
.card {
  color: #5a5a5a;
}
.card__modal-title-input {
  margin-bottom: 12px;
}
</style>
