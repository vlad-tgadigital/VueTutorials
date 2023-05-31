import { defineStore } from "pinia";
import { ref } from 'vue'
import { useMovieStore } from "./MovieStore";

const url =
  "https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query=";

//  Not Composition API
  // export const useSearchStore = defineStore("searchStore", {
//   state: () => ({
//     loader: false,
//     movies: [],
//   }),
//   actions: {
//     async getMovies(search) {
//       this.loader = true;
//       const res = await fetch(`${url}${search}`);
//       const data = await res.json();
//       this.movies = data.results;
//       this.loader = false;
//     },
//     addToUserMovies(object) {
//         const movieStore = useMovieStore()
//         movieStore.movies.push({...object, isWatched: false})
//     }
//   }
// });

// Composition API
export const useSearchStore = defineStore("searchStore", () => {
    const loader = ref(false);
    const movies = ref([]);
  
    const getMovies = async (search) => {
      loader.value = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      movies.value = data.results;
      loader.value = false;
    };
  
    const addToUserMovies = (object) => {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...object, isWatched: false });
    };
  
    return {
      loader,
      movies,
      getMovies,
      addToUserMovies,
    };
  });