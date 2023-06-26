import { bookmeterials, card, powerBank, printers,shaver} from "./Data/Data";

export const initialState = {
    getDetails: [],
    card : card,
    printers:printers,
    shaver: shaver,
    powerbank:powerBank,
    bookmeterials:bookmeterials,
    getFav: [],
    searchQuary: '',
    brand: '',
    checked: false,
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
}


export const stateReducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'DETAILS':
            return {
                ...state,
                getDetails: action.payload,
            }
        case 'FAV':
            return {
                ...state,
                getFav: [...state.getFav, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)],
                // getFav: [...state.getFav, state.printers.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
            }
            case 'FAV1':
                return {
                    ...state,
                    // getFav: [...state.getFav, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)],
                    getFav: [...state.getFav, state.printers.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
                }
                case 'FAV2':
                    return {
                        ...state,
                        // getFav: [...state.getFav, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)],
                        getFav: [...state.getFav, state.shaver.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
                    }
                    
            case 'FAV3':
                return {
                    ...state,
                    // getFav: [...state.getFav, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)],
                    getFav: [...state.getFav, state.powerbank.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
                }
                
            case 'FAV4':
                return {
                    ...state,
                    // getFav: [...state.getFav, state.card.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)],
                    getFav: [...state.getFav, state.bookmeterials.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
                }

                case 'UNFAV':
                    return {
                        ...state,
                        unFav: state.getFav.flat().filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false),
                        getFav : state.getFav.flat().filter(e => e.id !== action.payload.id)
                        // getFav: [...state.getFav, state.printers.filter(e => e.id === action.payload.id ? (e.isFav = !action.payload.isFav) : false)]
                    }

        case "search":
            return {
                ...state,
                searchQuary: action.payload
            }
        case "FILTER_BRAND":
            return {
                ...state,
                brand: action.payload.name,
                checked: !state.checked
            }
        case "FILTER_BRAND1":
            return {
                ...state,
                brand: action.payload.name,
                checked1: !state.checked1
            }
        case "FILTER_BRAND2":
            return {
                ...state,
                brand: action.payload.name,
                checked2: !state.checked2
            }
        case "FILTER_BRAND3":
            return {
                ...state,
                brand: action.payload.name,
                checked3: !state.checked3
            }
        case "FILTER_BRAND4":
            return {
                ...state,
                brand: action.payload.name,
                checked4: !state.checked4
            }
        case "FILTER_BRAND5":
            return {
                ...state,
                brand: action.payload.name,
                checked5: !state.checked5
            }
        case "FILTER_BRAND6":
            return {
                ...state,
                brand: action.payload.name,
                checked6: !state.checked6
            }
        case "FILTER_BRAND7":
            return {
                ...state,
                brand: action.payload.name,
                checked7: !state.checked7
            }
        case "FILTER_BRAND8":
            return {
                ...state,
                brand: action.payload.name,
                checked8: !state.checked8
            }
    
        default: {
            return state
        }
    }
}