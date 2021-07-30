import create from "zustand";

const useStore = create((set) => ({
  toggle:false,
  prevToggle:(prev) =>set(state => ({toggle:prev})),
  count: Number(0),
  inNum:Number(1),
  setInNum:(newNum) => set({inNum:Number(newNum)}),
  increseCount: () => set((state) => ({count:state.count + state.inNum})),
  decreseCount: () => set((state) => ({count:state.count - state.inNum})),
}));

export default useStore;