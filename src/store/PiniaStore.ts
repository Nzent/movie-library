// stores/showsStore.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export interface Show {
  id: number;
  name: string;
  image?: {
    medium: string;
    original: string;
  };
  summary?: string;
  premiered?: string;
  genres?: string[];
  rating?: {
    average: number | null;
  };
}

export const useShowsStore = defineStore("shows", () => {
  const selectedShows = ref<Show[]>([]);
  const selectedShowIds = ref<number[]>([]);

  // Load from localStorage on init
  const loadFromLocalStorage = () => {
    const stored = localStorage.getItem("selectedShowIds");
    if (stored) {
      selectedShowIds.value = JSON.parse(stored);
    }

    const storedShows = localStorage.getItem("selectedShows");
    if (storedShows) {
      selectedShows.value = JSON.parse(storedShows);
    }
  };

  // Save to localStorage whenever data changes
  watch(
    [selectedShows, selectedShowIds],
    () => {
      localStorage.setItem(
        "selectedShowIds",
        JSON.stringify(selectedShowIds.value)
      );
      localStorage.setItem(
        "selectedShows",
        JSON.stringify(selectedShows.value)
      );
    },
    { deep: true }
  );

  // Add show to grid
  const addShow = (show: Show) => {
    if (!selectedShowIds.value.includes(show.id)) {
      selectedShows.value.push(show);
      selectedShowIds.value.push(show.id);
    }
  };

  // Remove show from grid
  const removeShow = (showId: number) => {
    selectedShows.value = selectedShows.value.filter((s) => s.id !== showId);
    selectedShowIds.value = selectedShowIds.value.filter((id) => id !== showId);
  };

  // Check if show is already added
  const isShowAdded = (showId: number) => {
    return selectedShowIds.value.includes(showId);
  };

  // Clear all shows
  const clearAll = () => {
    selectedShows.value = [];
    selectedShowIds.value = [];
  };

  // Initialize
  loadFromLocalStorage();

  return {
    selectedShows,
    selectedShowIds,
    addShow,
    removeShow,
    isShowAdded,
    clearAll,
  };
});
