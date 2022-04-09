<template>
  <div style="display: inline-flex">
    <input id="num1" type="text" style="font-size:24px;padding: 8px;width: 32px;text-align:right;" maxlength="2" v-model="number1" value="0" />
    <div style="font-size:24px;padding: 8px;">
    +
    </div>
    <input id="num2" type="text" style="font-size:24px;padding: 8px;width: 32px;text-align:right;" maxlength="2" v-model="number2" value="0" />
    <div id="output" style="font-size:24px;padding: 8px;font-weight:700">
    = {{ output }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      number1: "10",
      number2: "20",
    };
  },
  computed: {
    output() {
      const res = parseInt(this.number1) + parseInt(this.number2);
      return res;
    },
  },
};
</script>
