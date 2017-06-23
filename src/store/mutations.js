export default {
    setMessages(state, messages) {
        messages.forEach((message) => {
            if(!state.messages.filter(msg => msg.type == message.type && msg.content == message.content).length) {
                state.messages.push(message);
            }
        });
    },
    setMovies(state, movies) {
        state.movies.push(...movies);
    }
}