import { createStore } from 'redux';

//ステート初期化
const info = {
    q_no : [],
    question : null,
    i : 0,
    correct: 0,
    incorrect: 0,
    ans_list: [],
    flg: 0
}

//レデューサ
function counterReducer (state = info, action){
    switch (action.type){
        case 'SETINFO':
            return{
                q_no : action.rand_arr,
                question : action.question,
                i : 0,
                correct : 0,
                incorrect : 0,
                ans_list: [],
                flg: 1
            };
        case 'CORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct + 1,
                incorrect : state.incorrect,
                ans_list: [...state.ans_list, true],
                flg: state.flg
            };
        case 'INCORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct,
                incorrect : state.incorrect + 1,
                ans_list: [...state.ans_list, false],
                flg: state.flg
            };
        case 'LAST':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                ans_list: [...state.ans_list],
                flg: 2
            };
        case 'RESET':
            return{
                q_no : [],
                question : null,
                i : 0,
                correct: 0,
                incorrect: 0,
                ans_list: [],
                flg: 0
            };
        default:
            return state;
    }
}

export default createStore(counterReducer);