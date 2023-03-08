<template>
  <div class="wrapper">
    <span
      v-for="n of 5"
      :key="n"
      :class="['iconfont icon-star', n <= starNum ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
      @click="setStarNum(n)"
    ></span>
  </div>
</template>
<script setup>
  import { useStars } from './hooks'
  const props = defineProps({
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 16,
    },
  })

  const emit = defineEmits([
    'getStarNum'
  ])

  // const setStarNum = (num) => {
  //   console.log('setStarNum', num)
  //   emit('getStarNum', num)
  // }

  const [
    starNum,
    setStarNum
  ] = useStars(props.num, () => {
    emit('getStarNum', starNum.value)
  })



</script>
<style lang="scss" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3919520 */
  src: url('//at.alicdn.com/t/c/font_3919520_kuzuiy8884q.woff2?t=1678290579992') format('woff2'),
    url('//at.alicdn.com/t/c/font_3919520_kuzuiy8884q.woff?t=1678290579992') format('woff'),
    url('//at.alicdn.com/t/c/font_3919520_kuzuiy8884q.ttf?t=1678290579992') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-star {
  transition: color .3s;

  &:before {
    content: "\e614";
  }
  &.active {
    color: #FBAB06;
  }
}


.wrapper {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
</style>