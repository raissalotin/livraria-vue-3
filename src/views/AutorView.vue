<script setup>
import { ref, reactive, onMounted } from "vue";
import AutorsApi from "@/api/autors";
const autorsApi = new AutorsApi();

const defaultAutors = { id: null, nome: "", email: "" };
const autors = ref([]);
const autor = reactive({ ...defaultAutors });

onMounted(async () => {
  autors.value = await autorsApi.buscarTodosOsAutors();
});

function limpar() {
  Object.assign(autor, { ...defaultAutors });
}

async function salvar() {
  if (autor.id) {
    await autorsApi.atualizarAutor(autor);
  } else {
    await autorsApi.adicionarAutor(autor);
  }
  autors.value = await autorsApi.buscarTodosOsAutors();
  limpar();
}

function editar(autor_para_editar) {
  Object.assign(autor, autor_para_editar);
}

async function excluir(id) {
  await autorsApi.excluirEditora(id);
  autors.value = await autorsApi.buscarTodosOsAutors();
  limpar();
}
</script>

<template>
  <h1>Autor</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="autor.nome" placeholder="Nome" />
    <input type="text" v-model="autor.email" placeholder="Site" />
    <button @click="salvar">Salvar</button>
    <button @click="limpar">Limpar</button>
  </div>
  <hr />
  <ul>
    <li v-for="autor in autors" :key="autor.id">
      <span @click="editar(autor)">
        ({{ autor.id }}) - {{ autor.nome }} - {{ autor.email }} -
      </span>
      <button @click="excluir(autor.id)">X</button>
    </li>
  </ul>
</template>

<style></style>