<template>
  <div>
    <div class="title">{{ title }}</div>
    <div class="boxs">
      <div
        v-for="(box, i) in boxs"
        :key="i"
        class="box">
        <div class="left">
          <div
            :class="getColor(box.color).circle"></div>
          <div
            :class="getColor(box.color).line"></div>
        </div>
        <div class="right">
          <div class="text">
            <span class="time">{{ box.time }}</span> <span class="txt">{{ box.txt }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./source/js/core.js"></script>

<style>
@import url('./source/css/style.css');
</style>
