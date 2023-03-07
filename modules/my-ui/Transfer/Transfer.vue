<template>
  <div>
    <selector
      :data="options"
      @select-change="setTargetIndex"
    />
  </div>
  <div class="transfer">
    <div class="box left-list">
      <list-title :title="leftTitle" />
      <list-item
        :data="leftListData"
        left-or-right="left"
        @checkbox-click="setCheckedData"
      />
    </div>
    <button-group
      :left-button-disabled="transferButtonDisabled.left"
      :right-button-disabled="transferButtonDisabled.right"
      @left-button-click="removeRightListData(checkedData.right)"
      @right-button-click="addRightListData(checkedData.left)"
    />
    <div class="box right-list">
      <list-title :title="rightTitle" />
      <list-item
        :data="rightListData"
        left-or-right="right"
        @checkbox-click="setCheckedData"
      />
    </div>
  </div>
</template>

<script setup>
  import Selector from './components/Selector';
  import ListTitle from './components/ListTitle';
  import ButtonGroup from './components/ButtonGroup';
  import ListItem from './components/ListItem';

  import {
    useTargetIndex,
    useComputedData,
    useRightListData,
    useCheckedData
  } from './hooks';
  const props = defineProps({
    data: {
      type: Object,
      default: () => []
    },
    rightTitle: {
      type: String,
      default: '已选择'
    }
  });
  const options = props.data.map(({ title }) => title);
  const [
    targetIndex,
    setTargetIndex
  ] = useTargetIndex(0);

  const [
    checkedData,
    addCheckedData,
    removeCheckedData,
  ] = useCheckedData()

  const [
    rightListData,
    addRightListData,
    removeRightListData
  ] = useRightListData([], checkedData);

  const {
    leftTitle,
    leftListData,
    transferButtonDisabled
  } = useComputedData(props.data, targetIndex, rightListData, checkedData);

  const setCheckedData = (checked, leftOrRight, item) => {
    checked
      ? addCheckedData(leftOrRight, item)
      : removeCheckedData(leftOrRight, item.id)
  }
</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
  flex-direction: row;
}

.box {
  width: 120px;
  height: 100%;
}

</style>