import { Layout, Menu, Breadcrumb, Icon, Carousel,Button} from 'antd';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
// import { Link } from 'dva/router';
import styles from './BasicLayout.less';
// import GlobalFooter from '../components/GlobalFooter';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 992,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class BasicLayout extends React.Component {

  constructor(props) {
    super();

    this.state = {
      windowHeight: 0,
      windowWidth: 0
    }
  }
  componentWillMount() {
    this.setState({
      windowWidth: document.querySelector('body').offsetWidth,
      windowHeight: document.querySelector('body').offsetHeight
    })
  }

  render() {
const layout = (
<div>
  <div style={{display:'flex', flexDirection:'row'}}>
    <div  className={styles.left}>
      <img src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/home.jpg" alt="这是一张图片" style={{ margin: '10px', width: '100%', height: this.state.windowHeight}} />
    </div>
    <div className = {styles.right} style={{ width: '100%', height: '200px' }}>
      <img style={{margin:'100px 400px 10px 400px' }} src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/logo.png" alt="这是一张图片" />
      <h1 style={{margin:'0px 298px'}}> 我就是我，吃货的我</h1>
      <Button style={{width:'150px', height:'45px', margin:'100px 400px 20px 400px'}}><Link to="/a">我 的</Link></Button>
      <Button style={{width:'150px', height:'45px', margin:'0px 400px 20px 400px'}}><Link to="/b">日 迹</Link></Button>
      <Button style={{width:'150px', height:'45px', margin:'0px 400px 100px 400px'}}><Link to="/c">我 的 生 活</Link></Button>
    </div>
  </div>
</div>

)

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
   }
  }
export default connect()(BasicLayout);