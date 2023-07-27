<template>
  <button
    type="button"
    class="btn btn-primary mb-3"
    data-bs-toggle="modal"
    data-bs-target="#userModal"
  >
    Ajouter
  </button>
  <div class="container col-md-12 shadow rounded p-3">
    <div class="card">
      <div class="card-header"><h4>Liste des utilisateurs</h4></div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nom</th>
              <th scope="col">Email</th>
              <th scope="col" style="width: 25%">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td class="d-flex justify-content-between">
                <router-link
                  :to="{ name: 'user.show', params: { id: user.id } }"
                  class="btn btn-primary"
                  >Voir</router-link
                >
                <button class="btn btn-secondary">Editer</button>
                <form>
                  <input type="hidden" name="_method" value="DELETE" />
                  <input type="hidden" name="_token" />
                  <button type="submit" class="btn btn-danger">
                    Supprimer
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- MODAL -->
  <div
    class="modal fade"
    id="userModal"
    tabindex="-1"
    aria-labelledby="userModallLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="userModallLabel">
            Créer un utilisateur
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="row" @submit.prevent="createUser">
            <div class="form-group col-md-12">
              <div class="row mb-2">
                <div>
                  <label
                    for="name"
                    class="col-md-3 col-form-label text-md-start"
                    >Nom</label
                  >
                </div>

                <div class="col">
                  <input
                    id="name"
                    type="text"
                    class="form-control"
                    name="name"
                    required
                    autocomplete="name"
                    autofocus
                    v-model="userData.name"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div>
                  <label
                    for="email"
                    class="col-md-3 col-form-label text-md-start"
                    >Email</label
                  >
                </div>

                <div class="col">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    required
                    autocomplete="email"
                    v-model="userData.email"
                  />
                </div>
              </div>

              <div class="row mb-2">
                <div>
                  <label
                    for="password"
                    class="col-md-3 col-form-label text-md-start"
                    >Mot de passe</label
                  >
                </div>

                <div class="col">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    autocomplete="password"
                    v-model="userData.password"
                  />
                </div>
              </div>

              <input
                type="submit"
                class="btn btn-primary mt-3"
                value="Enregistrer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../../store";

const userData = ref({
  name: "",
  email: "",
  password: "",
});

onMounted(() => {
  store.dispatch("getAllUsers");
});

let users = computed(() => {
  return store.state.users;
});

const createUser = () => {
  //   console.log(userData.value);
  store.dispatch("createUser", userData.value);
};
</script>

<style>
</style>