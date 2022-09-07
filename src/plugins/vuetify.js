import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

const theme = { primary: colors.deepOrange
}

export default new Vuetify({
  breakpoint: {
    // breakpoint 값을 재정의하는것
    thresholds: {
      xs: 360,
    },
    mobileBreakpoint: 'xs',
  },
  // https://vuetifyjs.com/en/features/presets/#default-preset
  // 컬러 재정의
  theme: {
    themes: {
      light: theme,
      dark: theme
    }
  }
});
