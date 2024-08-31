<template>
  <div class="d-flex flex-center width-full" style="gap: 25px">
    <div
      class="pack-card pa-10 d-flex flex-column flex-center text-black text-center"
      :class="[getBgClass(index)]"
      v-for="(item, index) in items"
      style="gap: 10px"
    >
      <Icon :name="item.icon" size="50" />
      <strong>{{ item.label }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
interface packProps {
  items: Array<{
    icon: string;
    label: string;
    variant: "primary" | "secondary" | "tertiary" | "amber" | "success";
  }>;
}
const props = defineProps<packProps>();
const getBgClass = (index: number) => {
  switch (props.items[index].variant) {
    case "secondary":
      return "bg-rose-200";
    case "amber":
      return "bg-amber-200";
    case "success":
      return "bg-emerald-200";
    case "tertiary":
      return "bg-purple-200";
    default:
      return "bg-sky-200";
  }
};
</script>

<style lang="scss" scoped>
.pack-card {
  border-radius: 20px;
  width: 100%;
  height: 100%;
  max-width: 170px;
  min-height: 170px;
  transition: all 0.5s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
