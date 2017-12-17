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

  render() {
const layout = (
<div style={{display:'flex', flexDirection:'row'}}>
  <div>
    <img src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/home.jpg" alt="这是一张图片"/>
  </div>
  <div >
    <img style={{margin:'100px 400px 10px 400px' }} src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/logo.png" alt="这是一张图片" />
    <h1 style={{margin:'0px 298px'}}> 我就是我，吃货的我</h1>
    <h2 style={{margin:'30px 270px'}}>瞅啥瞅，啥也没有</h2>
    <Button style={{margin:'100px 400px 20px 400px'}}>我 的</Button>
    <Button style={{margin:'0px 400px 20px 400px'}}>日 迹</Button>
    <Button style={{margin:'0px 400px 100px 400px'}}>生 活</Button>
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