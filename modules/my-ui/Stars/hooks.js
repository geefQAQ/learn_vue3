import { ref } from 'vue';

export function useStars (num, callback) {
  console.log('hooks--num', num)
  const starNum = ref(num);


  const setStarNum = (num) => {
    starNum.value = num;
    callback();
  }
  return [
    starNum,
    setStarNum
  ]
}