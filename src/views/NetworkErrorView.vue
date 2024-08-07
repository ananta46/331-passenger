<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>
      U are experiencing network issue
      <a href="#" @click="$router.go(-1)">click here</a> to try again
    </h3>
  </div>
</template>
