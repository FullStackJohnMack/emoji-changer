const INITIAL_STATE = { emoji: "Welcome!"};

const emojiChanger = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HAPPY':
            return {...state, emoji: "◉‿◉"};
        case 'SAD':
            return {...state, emoji: "ಥ_ಥ"};
        case 'ANGRY':
            return {...state, emoji: "ლಠ益ಠ)ლ"};
        case 'CONFUSED':
            return {...state, emoji: "℃ↂ_ↂ"};
        default:
            return state;
    }
}

const store = Redux.createStore(emojiChanger);