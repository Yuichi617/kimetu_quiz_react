import { createStore} from 'redux';

//ステート初期化
const info = {
    q_no : [],
    question : null,
    i : 0,
    correct: 0,
    incorrect: 0,
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
                flg: 1
            };
        case 'CORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct + 1,
                incorrect : state.incorrect,
                flg: state.flg
            };
        case 'INCORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct,
                incorrect : state.incorrect + 1,
                flg: state.flg
            };
        case 'LAST':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                flg: 2
            };
        case 'RESET':
            return{
                q_no : [],
                question : null,
                i : 0,
                correct: 0,
                incorrect: 0,
                flg: 0
            };
        default:
            return state;
    }
}

export default createStore(counterReducer);