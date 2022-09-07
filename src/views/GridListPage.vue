<template>
  <v-container>
    <v-row>
      <!-- 최대 12개 칸이 있고 5개의 브레이크
       포인트마다 몇개로 할지를 정할 수 있음 -->
      <v-col
        v-for="count in 12"
        :key="count"
        cols="12"

        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          class="pa-3"
          outlined
        >
          Col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
