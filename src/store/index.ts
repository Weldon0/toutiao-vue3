import useChannel from "./channel";
import useNewList from "./newlist";

export default function useStore() {
  return {
    channelStore: useChannel(),
    newStore: useNewList()
  }
}
