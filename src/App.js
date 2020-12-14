import {Component} from 'react';
import './assets/reset.css';
import './assets/style.css';
import {connect} from 'react-redux';
import Layout from './components/Layout';
import Home from './components/Home';
import Main from './components/Main';
import Result from './components/Result';

class App extends Component{
  constructor(props){
    super('props');
  }

  render(){
    return (
      <div className="App">
        <Layout>
        {(() => {
          if (this.props.flg === 0) {
            return <Home />
          } else if (this.props.flg === 1) {
            return <Main />
          } else if (this.props.flg === 2){
            return  <Result />
          }
        })()}
        </Layout>
      </div>
    );
  }
}
App = connect((state)=>state)(App);
export default App;
