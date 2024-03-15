import { create } from "zustand";

export const useAudioStore = create<State & Action>((set) => ({
  accessToken: "",
  audioData: [],
  loading: false,
  error: null,
  updateAccessToken: (access_token) =>
    set(() => ({ accessToken: access_token })),
  updateAudioData: (newAudioData) => set(() => ({ audioData: newAudioData })),
  updateLoading: (loading) =>
    set(() => ({
      loading,
    })),
  updateError: (error) =>
    set(() => ({
      error,
    })),
}));
