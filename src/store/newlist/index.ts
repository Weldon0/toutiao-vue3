import {defineStore} from "pinia";

const useNewList = defineStore('newlist', {
  state() {
    return {
      list: [],
      active: 0
    }
  }
})

export default useNewList
