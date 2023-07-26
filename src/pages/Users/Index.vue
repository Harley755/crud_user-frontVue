<template>
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
                  <input
                    type="hidden"
                    name="_token"
                    value="{{ csrf_token() }}"
                  />
                  <button type="submit" class="btn btn-danger">
                    Supprimer
                  </button>
                </form>
              </td>
            </tr>
            <!-- Modal -->
            <!-- <div class="modal fade" id="editModal_{{$variante->id}}" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="productModalLabel">Editer la variante ({{$variante->name}})</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form class="row" method="POST" action="{{ route('variantes.update', [$variante->id]) }}" enctype="multipart/form-data">
                                            @method('PUT')
                                            @csrf
                                            <div class="form-group col-md-12">
                                                {{-- PRODUIT --}}
                                                <div class="row mb-2">
                                                    <div>
                                                        <label for="prix" class="col-md-3 col-form-label text-md-start">{{ __('Produit') }}</label>
                                                    </div>

                                                    <div class="col">
                                                        <select required class="form-control select2  @error('prix') is-invalid @enderror" name="product_id" id="product_id">
                                                            <option value="">Veuillez selectionner un produit</option>
                                                            @foreach($products as $id => $entry)
                                                            <option value="{{ $id }}" {{ old('product_id') == $id ? 'selected' : '' }}>{{ $entry }}</option>
                                                            @endforeach
                                                        </select>

                                                        @error('prix')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                        @enderror
                                                    </div>
                                                </div>

                                                {{-- NAME --}}
                                                <div class="row mb-2">
                                                    <div>
                                                        <label for="name" class="col-md-3 col-form-label text-md-start">{{ __('Name') }}</label>
                                                    </div>

                                                    <div class="col">
                                                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name', $variante->name) }}" required autocomplete="name" autofocus>

                                                        @error('name')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                        @enderror
                                                    </div>
                                                </div>

                                                {{-- PRIX --}}
                                                <div class="row mb-2">
                                                    <div>
                                                        <label for="prix" class="col-md-3 col-form-label text-md-start">{{ __('Prix') }}</label>
                                                    </div>

                                                    <div class="col">
                                                        <input id="prix" type="number" class="form-control @error('prix') is-invalid @enderror" name="prix" value="{{ old('prix', $variante->prix) }}" required autocomplete="prix" autofocus>

                                                        @error('prix')
                                                        <span class="invalid-feedback" role="alert">
                                                            <strong>{{ $message }}</strong>
                                                        </span>
                                                        @enderror
                                                    </div>
                                                </div>


                                                <input type="submit" class="btn btn-primary mt-3" value="Enregistrer">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../../store";

onMounted(() => {
  store.dispatch("getAllUsers");
});

let users = computed(() => {
  return store.state.users;
});
</script>

<style>
</style>