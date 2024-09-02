<template>
  <div>
    <header>
      <!-- <navbar /> -->
       <!-- <simple-nav /> -->
    </header>
    <main>
      <slot />
    </main>
    <footer class="width-full bg-zinc-900 d-flex flex-center">
      <div
        class="max-width-1200 width-full pa-6 d-flex flex-space-between"
        style="gap: 10px"
      >
        <img src="../assets/images/logo.png" alt="" />
        <div class="list d-flex flex-center text-white gap-8">
          <ul class="d-flex flex-start flex-column gap-1">
            <li>About</li>
            <li>About us</li>
            <li>Features</li>
            <li>News & Blogs</li>
          </ul>
          <ul class="d-flex flex-start flex-column gap-1">
            <li>Contact</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
          <ul class="d-flex flex-start flex-column gap-1">
            <li>Support</li>
            <li>FAQs</li>
            <li>Support Centre</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url("../assets/layoutsStyle.scss");
.list {
  ul {
    li {
      font-size: 16px;
      &:first-child {
        font-weight: bold;
        font-size: 20px;
      }
    }
  }
}
</style>
