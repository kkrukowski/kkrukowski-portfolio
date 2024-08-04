import {create} from 'zustand';

type State = {
    menuIndex: number
}

type Action = {
    updateMenuIndex: (menuIndex: State['menuIndex']) => void
}

const  useNavStore = create<State & Action>((set) => ({
    menuIndex: 0,
    updateMenuIndex: (index: number) => set(() => ({menuIndex: index}))
}))

export default useNavStore;