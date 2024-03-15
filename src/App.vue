<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link to="/categorias">Categorias</router-link> |
    <router-link to="/editoras">Editoras</router-link> |
    <router-link to="/autors">Autores</router-link> |
  </header>
  <main>
    <RouterView />
  </main>
</template>