<template>
  <div>
    <a href="http://dev.local">バックエンドに戻る</a>
    <div v-if="users">
      <h2>ユーザー一覧：</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.id }}: {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { fetchData } = useApi();
import { ref } from "vue";

const users = ref([]);

const { data } = await useAsyncData("users", () => fetchData("/users"));

users.value = [...data.value];
</script>
