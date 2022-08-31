import {defineStore} from "pinia";

const useChannel = defineStore('channel', {
  state() {
    return {
      list: [],
      active: 0
    }
  }
})

export default useChannel
