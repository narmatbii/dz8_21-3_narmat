




export const sortItem = (pokemonList = [], type) => {
    switch(type) {
        case 'weight':
            return pokemonList.sort((a,b) => b.weight - a.weight);
        case 'attach':
            return pokemonList.sort((a,b) => b.stats[1].base_stat - a.stats[1].base_stat)

        default:
            return pokemonList;
    }
}



