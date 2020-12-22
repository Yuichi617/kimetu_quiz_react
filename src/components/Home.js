import {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {isModalOpen: false};
        this.setInfo = this.setInfo.bind(this);
    }

    handleClickOpen(){
        this.setState({isModalOpen: true});
      }
    
    handleClickClose(){
        this.setState({isModalOpen: false});
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
        var arr = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
        arr = arr.slice(0,10)

        return this.props.dispatch({ type: 'SETINFO', rand_arr: arr});
    }

    render(){
        var crea_question_list = [];
        for(let i = 0; i < 30; i++){
            if(this.props.crea_question[i] == true){
                crea_question_list.push(
                    <tr className="crea_question_set">
                        <td>No.{i+1}</td>
                        <td>{this.props.question[i].q_sentence}</td>
                        <td>{this.props.question[i].options[this.props.question[i].answer-1]}</td>
                    </tr>
                );
            } else {
                crea_question_list.push(
                    <tr className="crea_question_set">
                        <td>No.{i+1}</td>
                        <td>???</td>
                        <td>???</td>
                    </tr>
                );
            }
        }
        //モーダル作成
        let modal;
        if (this.state.isModalOpen){
            modal = (
                <div className='crea_question_modal'>
                  <div className='crea_question_modal-inner'>
                    <div className="crea_question_modal-content">
                        <div className="modal-close-btn">
                            <i className="far fa-times-circle fa-2x" onClick={() => this.handleClickClose()}></i>
                        </div>
                        <table>
                            <tr className="crea_question_set">
                                <th　className="NoCol"></th>
                                <th className="QuestionCol">問題</th>
                                <th className="AnswerCol">解答</th>
                            </tr>
                            {crea_question_list}
                        </table>
                    </div>
                  </div>
                </div>
              );
          }
        return(
            <div className="top-main-screen">
                <div className="top-main-screen-inner">
                    <div className="text1">
                        クイズに答えてあなたの鬼滅力を試しましょう。<br />
                        問題に正解することで問題を解放できます。<br />
                        全ての問題の解放を目指しましょう。
                    </div>
                    <div className="start_btn" onClick={this.setInfo}>
                        始める
                    </div>
                    <div className="open_crea_question_modal" onClick={() => {this.handleClickOpen()}}>
                        <label className="trigger_text">解放した問題を見る</label>
                    </div>
                {modal}
                </div>
            </div>
        )
    }
}
Home = connect((state)=>state)(Home);
export default Home;