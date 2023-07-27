<template>
  <div class="container">
    <div class="form-group mb-3">
      <a class="btn btn-default" @click="$router.back()"> Retour </a>
    </div>

    <div class="col-md-12 shadow p-3 bg-body rounded">
      <div class="col-md-12 shadow p-3 bg-body rounded">
        <div class="form-group">
          <table class="table table-bordered table-striped">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{{ Userdetails.id }}</td>
              </tr>
              <tr>
                <th>Nom</th>
                <td>{{ Userdetails.name }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{{ Userdetails.email }}</td>
              </tr>
              <tr>
                <th>Compte créé le</th>
                <td>{{ Userdetails.created_at }}</td>
              </tr>
              <tr>
                <th>Mis à jour le</th>
                <td>{{ Userdetails.updated_at }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../../store";

const route = useRoute();

const params = route.params.id;
console.log("params: ", params);

onMounted(() => {
  store.dispatch("showUser", params);
});

const Userdetails = computed(() => {
  return store.state.user;
});
</script>

<style>
</style>