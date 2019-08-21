import Vue from 'vue';
import VueWait from 'vue-wait';

declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  export interface VueConstructor {
    $wait: VueWait;
  }
  export interface Vue {
    $wait: VueWait;
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
  export interface ComponentOptions<V extends Vue> {
    wait?: VueWait;
  }
}
