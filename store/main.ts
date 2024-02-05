import { create } from "zustand";

type State = {
  breadcrumbs: string[];
  activePath: string[];
};
type Action = {
  setBreadcrumbs: (path: string[]) => void;
  setActivePath: (path: string[]) => void;
};
const useMainStore = create<State & Action>((set) => ({
  breadcrumbs: [],
  activePath: [],
  setBreadcrumbs: (path: string[]) => set(() => ({ breadcrumbs: path })),
  setActivePath: (path: string[]) => set(() => ({ activePath: path })),
}));

export default useMainStore;
