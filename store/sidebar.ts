import { create } from "zustand";

type State = {
  isOpen: boolean;
};
type Action = {
  toggleSidebar: () => void;
  setSidebar: (newState: boolean) => void;
};
const useSidebarStore = create<State & Action>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSidebar: (newState: boolean) => set(() => ({ isOpen: newState })),
}));

export default useSidebarStore;
