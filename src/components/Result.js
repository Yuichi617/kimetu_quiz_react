import { Component } from "react";
import {connect} from 'react-redux';
import taisi from '../assets/images/taisi.jpg';
import tuguko from '../assets/images/tuguko.jpg';
import kagen from '../assets/images/kagen.jpg';
import hasira from '../assets/images/hasira.jpg';
import jougen from '../assets/images/jougen.jpg';
import muzan from '../assets/images/muzan.jpg';
import firebase from "../Firebase";
import "firebase/storage";

class Result extends Component{
    constructor(props){
        super(props);
        this.reset = this.reset.bind(this);
        this.state = { isModalOpen: false , data:[]};
        //this.getFireData();
        //console.log("constructor"+this.state.data.taisi);
    }

    handleClickOpen(){
        this.setState({isModalOpen: true});
      }
    
    handleClickClose(){
        this.setState({isModalOpen: false});
      }

    //Realtime Databaseからデータ取得
    /*getFireData(){
        var class_count = firebase.database().ref('/class_count');
        class_count.on('value', (snapshot) =>{
                this.setState({
                    data : snapshot.val()
                });       
          });
          //console.log("function:"+this.state.data.taisi);
        }*/

    // 正解数に応じてレンダリング内容を変える.(テキスト)
    renderRank(num_correct) {
        if (num_correct < 3) {
            return (
            <div className="class_text">
                <span>鬼殺隊隊士級</span>
            </div>)
            } else if(num_correct < 5){
            return(
            <div className="class_text">
                <span>継子級</span>
            </div>)
            } else if(num_correct < 7){
            return(
            <div className="class_text">
                <span>下弦の鬼級</span>
            </div>)
            } else if(num_correct < 9){
            return(
            <div className="class_text">
                <span>柱級</span>
            </div>)
            } else if(num_correct < 10){
            return(
            <div className="class_text">
                <span>上弦の鬼級</span>
            </div>)
            } else if(num_correct === 10){
            return(
            <div className="class_text">
                <span>無惨級</span>
            </div>)
            }
        }

    // 正解数に応じてレンダリング内容を変える.(図)
    renderHierarchie(num_correct) {
        if (num_correct < 3) {
            return (
                <div className="result-image-box">
                    <img src={taisi} width="400"/>
                </div>)
            } else if(num_correct < 5){
            return(
                <div className="result-image-box">
                    <img src={tuguko} width="400"/>
                </div>)
            } else if(num_correct < 7){
                return(
                <div className="result-image-box">
                    <img src={kagen} width="400"/>
                </div>)
            } else if(num_correct < 9){
                return(
                <div className="result-image-box">
                    <img src={hasira} width="400"/>
                </div>)
            } else if(num_correct < 10){
                return(
                <div className="result-image-box">
                    <img src={jougen} width="400"/>
                </div>)
            } else if(num_correct === 10){
                return(
                <div className="result-image-box">
                    <img src={muzan} width="400"/>
                </div>)
            }
        }

        //正解数に応じてレンダリング内容を変える.(順位)
        /*renderNumber(num_correct){
            if (num_correct < 3) {
                return (
                    <div className="result-number-box">
                        あなたは{this.state.data.taisi}人目の鬼殺隊隊士です。
                    </div>)
                } else if(num_correct < 5){
                return(
                    <div className="result-number-box">
                        あなたは{this.state.data.tuguko}人目の継子です。
                    </div>)
                } else if(num_correct < 7){
                    return(
                    <div className="result-number-box">
                        あなたは{this.state.data.kagen}人目の下弦の鬼です。
                    </div>)
                } else if(num_correct < 9){
                    return(
                    <div className="result-number-box">
                        あなたは{this.state.data.hasira}人目の柱です。
                    </div>)
                } else if(num_correct < 10){
                    return(
                    <div className="result-number-box">
                        あなたは{this.state.data.jougen}人目の上弦の鬼です。
                    </div>)
                } else if(num_correct === 10){
                    return(
                    <div className="result-number-box">
                        あなたは{this.state.data.muzan}人目の鬼舞辻無惨です。
                    </div>)
                }
        }*/

        reset(e){
            return this.props.dispatch({ type: 'RESET'});
        }

    render(){
        //データベースからデータ取得
        /*if(this.state.data === []){
            this.getFireData();
        }*/
        var ans_list = [];
        for(let i = 0; i < 10; i++){
            ans_list.push(
                <tr className="ans_set">
                    <td>{this.props.question[this.props.q_no[i]].q_sentence}</td>
                    <td>{this.props.question[this.props.q_no[i]].options[this.props.question[this.props.q_no[i]].answer-1]}</td>
                </tr>
                );
        }
        //モーダル作成
        let modal;
        if (this.state.isModalOpen){
            modal = (
                <div className='modal'>
                  <div className='modal-inner'>
                    <div className="modal-content">
                        <div className="modal-close-btn">
                            <i className="far fa-times-circle fa-2x" onClick={() => this.handleClickClose()}></i>
                        </div>
                        <table>
                            <tr className="ans_set">
                                <th>問題</th>
                                <th>解答</th>
                            </tr>
                            {ans_list}
                        </table>
                    </div>
                  </div>
                </div>
              );
          }
        return(
            <div className="result">
                <div className="result-text">
                {console.log("return:"+this.state.data.taisi)}
                    {this.props.correct}問正解でした。
                    あなたの鬼滅力は・・・
                    {this.renderRank(this.props.correct)}
                    {/*this.renderNumber(this.props.correct)*/}
                </div>
                {this.renderHierarchie(this.props.correct)}
                    <div className="retry_btn" onClick={this.reset}>再挑戦</div>
                <div className="print_answer" >
                    <span className="print_answer_text" onClick={() => {this.handleClickOpen()}}>解答をみる</span>
                </div>
                {modal}
            </div>
        );
    }
}
Result = connect((state)=>state)(Result);
export default Result;