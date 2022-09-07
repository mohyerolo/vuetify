<template>
  <v-container>
    <v-card>
      <v-card-title> Typography </v-card-title>
      <v-card-text class="grey lighten-3">
        <v-card
          class="pa-3 text-h2 primary lighten-5 d-none d-sm-block"
          outlined
        >
          primary 컨텐츠 (사이즈가 sm이상이면 나타남)
        </v-card>
        <v-card
          class="pa-3 text-h2 secondary darken-1 d-block"
          outlined
        >
          secondary 컨텐츠
        </v-card>
        <v-card
          class="pa-3 text-h2 error"
          outlined
        >
          에러 컨텐츠
        </v-card>
        <v-card
          class="pa-3 text-h2 primary--text"
          outlined
        >
          primary--text 컨텐츠
        </v-card>
        <v-card
          class="pa-3 text-h2 error--text"
          outlined
        >
          error--text 컨텐츠
        </v-card>
        <p class="text-h1">
          Heading 1
        </p>
        <p class="text-h2">
          Heading 2
        </p>
        <p class="text-h3 text-sm-subtitle-1">
          Heading 3
        </p>
        <!-- display-4로 했더니 오류나고 저장하면 자동으로 text-h1으로 변경됨 -->
        <p class="text-h1">
          display 4
        </p>
        <!-- h1, h2, h3, h4, h5, h6, subtitle-1,
          subtitle-2, body-1, body-2, button, caption, overline -->

        <!-- Font emphasis -->
        <p class="font-weight-black">
          Black text
        </p>
        <p class="font-weight-thin">
          Thin weight text.
        </p>

        <!-- Alignment -->
        <p class="text-justify">
          <!-- 너비에 맞게 텍스트가 채워짐(늘어남) -->
          Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
          faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus
          adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut,
          mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
          Praesent venenatis metus at tortor pulvinar varius. Donec venenatis
          vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut
          neque.
        </p>
        <p class="text-center text-sm-right">
          <!-- default(xs)사이즈에서는 중앙정렬, sm에서는 오른쪽 -->
          Right aligned text on all viewport sizes.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
