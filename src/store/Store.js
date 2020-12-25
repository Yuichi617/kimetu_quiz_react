import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import json_data from '../assets/question_set.json';

//ステート初期化
const info = {
    q_no : [],
    question : json_data,
    i : 0,
    correct: 0,
    incorrect: 0,
    ans_list: [],
    flg: 0,
    crea_question: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
}

//レデューサ
function counterReducer (state = info, action){
    switch (action.type){
        case 'SETINFO':
            return{
                q_no : action.rand_arr,
                question : state.question,
                i : 0,
                correct : 0,
                incorrect : 0,
                ans_list: [],
                flg: 1,
                crea_question: state.crea_question
            };
        case 'CORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct + 1,
                incorrect : state.incorrect,
                ans_list: [...state.ans_list, true],
                flg: state.flg,
                crea_question: action.tmp_crea_question
            };
        case 'INCORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct,
                incorrect : state.incorrect + 1,
                ans_list: [...state.ans_list, false],
                flg: state.flg,
                crea_question: state.crea_question
            };
        case 'LAST':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                ans_list: [...state.ans_list],
                flg: 2,
                crea_question: state.crea_question
            };
        case 'RESET':
            return{
                q_no : [],
                question : state.question,
                i : 0,
                correct: 0,
                incorrect: 0,
                ans_list: [],
                flg: 0,
                crea_question: state.crea_question
            };
        default:
            return state;
    }
}

// Redux Persistの設定
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['crea_question'] 
}
// パーシストレデューサの作成
const persistedReducer = persistReducer(persistConfig, counterReducer)
// ストアの作成
let store = createStore(persistedReducer)
//パーシスターの作成
export const persistor = persistStore(store)

export default store