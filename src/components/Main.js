import {Component} from 'react';
import {connect} from 'react-redux';
import firebase from "../Firebase";
import "firebase/storage";

class Main extends Component{
    constructor(props){
        super(props);
        this.doAction1 = this.doAction1.bind(this);
        this.doAction2 = this.doAction2.bind(this);
        this.doAction3 = this.doAction3.bind(this);
    }

    //Realtime Databaseの更新
    updateFireData(num_correct){
        var class_count = firebase.database().ref('/class_count');
        if (num_correct < 3) {
            class_count.transaction((post) => {
                if (post) {
                    post.taisi++;
                }
                return post;
              });
        } else if(num_correct < 5){
            class_count.transaction((post) => {
                if (post) {
                    post.tuguko++;
                }
                return post;
              });
        } else if(num_correct < 7){
            class_count.transaction((post) => {
                if (post) {
                    post.kagen++;
                }
                return post;
              });
        } else if(num_correct < 9){
        class_count.transaction((post) => {
                if (post) {
                    post.hasira++;
                }
                return post;
              });
        } else if(num_correct < 10){
        class_count.transaction((post) => {
                if (post) {
                    post.jougen++;
                }
                return post;
              });
        } else if(num_correct === 10){
        class_count.transaction((post) => {
                if (post) {
                    post.muzan++;
                }
                return post;
              });
        }
    }

    doAction1(e){
        //ストアに回答データを登録
        if(1 === this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.updateFireData(this.props.correct);
            return this.props.dispatch({ type: 'LAST'});
        }
            }

    doAction2(e){
        //ストアに回答データを登録
        if(2 === this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.updateFireData(this.props.correct);
            return this.props.dispatch({ type: 'LAST'});
        }
    }

    doAction3(e){
        //ストアに回答データを登録
        if(3 === this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.updateFireData(this.props.correct);
            return this.props.dispatch({ type: 'LAST'});
        }
    }

    render(){
        return(
            <div className="main-screen">
                <div className="question-screen">
                    <div className="question_no_box">
                        <span className="question_no">第{this.props.i + 1}問</span>
                    </div>
                    <div className="question_box">
                        {this.props.question[this.props.q_no[this.props.i]].q_sentence}
                    </div>
                    <div className="choice_box">
                        <div className="options">
                            <label onClick={this.doAction1}>
                                <div className="option">
                                    {this.props.question[this.props.q_no[this.props.i]].options[0]}<br/>
                                </div>
                            </label>
                            <label onClick={this.doAction2}>
                                <div className="option">
                                    {this.props.question[this.props.q_no[this.props.i]].options[1]}<br/>
                                </div>
                            </label>
                            <label onClick={this.doAction3}>
                                <div className="option">
                                    {this.props.question[this.props.q_no[this.props.i]].options[2]}<br/>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Main = connect((state)=>state)(Main);
export default Main;