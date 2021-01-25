<template>
  <div class="squaredThree">
    <input
      type="checkbox"
      value="None"
      id="squaredThree"
      name="check"
      v-model="checkbox"
    />
    <label for="squaredThree"></label>
    <span
      @click="
        () => {
          checkbox = !checkbox;
        }
      "
      v-if="placeholder"
      >{{ placeholder }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false
    },
    checked: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      checkbox: this.checked ? true : false,
    }
  },
  watch: {
    checkbox() {
      this.$emit('checkbox', this.checkbox);
    }
  }
}
</script>

<style scoped>
.squaredThree {
  width: 100% !important;
  height: 25px;
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.squaredThree span {
  margin-left: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.squaredThree span:hover,
.squaredThree span:focus {
  text-decoration: underline;
}
.squaredThree label {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background: #374151;
  border-radius: 4px;
  border: 2px solid #374151;
}
.squaredThree label:after {
  content: '';
  width: 9px;
  height: 5px;
  position: absolute;
  top: 4px;
  left: 4px;
  border: 3px solid #fcfff4;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
.squaredThree label:hover::after {
  opacity: 0.3;
}
.squaredThree input[type='checkbox'] {
  visibility: hidden;
}
.squaredThree input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>