import {Component} from 'react';
import {connect} from 'react-redux';
import json_data from '../assets/question_set.json';

class Home extends Component{
    constructor(props){
        super(props);
        this.setInfo = this.setInfo.bind(this);
    }

    setInfo(){
        /*問題のランダマイズ*/
        function shuffle(array) {
            for (let i = array.length - 1; i >= 0; i--) {
              let rand = Math.floor(Math.random() * (i + 1));
              // 配列の数値を入れ替える
              [array[i], array[rand]] = [array[rand], array[i]]
            }
            return array;
          }
        var arr = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
        arr = arr.slice(0,10)

        return this.props.dispatch({ type: 'SETINFO', question: json_data, rand_arr: arr});
    }

    render(){
        return(
            <div className="top-main-screen">
                <div className="text1">
                    このクイズであなたの鬼滅力を試すことができます。
                </div>
                <div className="start_btn" onClick={this.setInfo}>
                    始める
                </div>
            </div>
        )
    }
}
Home = connect((state)=>state)(Home);
export default Home;