export const findObjectById = (programs, search) => {
    console.log('SEARCH,',programs)
    return programs.find(program => program.id === search)
}