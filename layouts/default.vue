<template>
  <div class="font-Poppins">
    <header>
      <!-- <navbar /> -->
      <SimpleNav />
    </header>
    <main>
      <slot />
    </main>
    <footer
      class="bg-black pa-4 width-full d-flex flex-center gap-10 flex-column"
    >
      <div
        class="width-full d-flex flex-space-between max-width-1200 text-white"
      >
        <div>
          <img src="../assets/images/logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            rerum labore mollitia voluptatem consequuntur dolorem modi sed
            molestiae possimus dicta?
          </p>
        </div>
        <div class="list width-full d-flex flex-center text-white gap-8">
          <ul class="d-flex flex-start flex-column gap-3">
            <li>lorem</li>
            <li>lore</li>
            <li>qwerrr</li>
            <li>aasss</li>
            <li>hellow</li>
          </ul>
          <ul class="d-flex flex-start flex-column gap-3">
            <li>lorem</li>
            <li>lore</li>
            <li>qwerrr</li>
            <li>aasss</li>
            <li>hellow</li>
          </ul>
          <ul class="d-flex flex-start flex-column gap-3">
            <li>lorem</li>
            <li>lore</li>
            <li>qwerrr</li>
            <li>aasss</li>
            <li>hellow</li>
          </ul>
          <ul class="d-flex flex-start flex-column gap-3">
            <li>lorem</li>
            <li>lore</li>
            <li>qwerrr</li>
            <li>aasss</li>
            <li>hellow</li>
          </ul>
        </div>
      </div>
      <hr class="width-full max-width-1200" />
      <div
        class="d-flex flex-space-between text-capitalize width-full max-width-1200 text-white gap-2"
      >
        <p>privacy policy, trems & conditions</p>
        <p>&copy; All copyrights reserved from IMT</p>
      </div>
    </footer>
    <!-- <footer class="width-full bg-zinc-900 d-flex flex-center">
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
    </footer> -->
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
