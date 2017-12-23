import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel,Button } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './first.less';
// import { Link } from 'dva/router';
// import styles from './BasicLayout.less';
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
class first extends React.Component{

 render() {
  const layout = (
    <Layout>
      <div style={{display:'flex',flexDirection:'row', Header:'70px'}}>
        <div> 
          <img src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/about.jpg" alt="这是一张图片"/>
        </div>
        <div>
          <Button style={{width:'150px', height:'45px',margin:'100px 0px 50px 10px'}}><Link to="/">返回首页</Link></Button>
          {/* <div className={styles.one} style={{ border: '1px solid black', width:'100px', height: '0px' }}></div>
          <h1 style={{margin:'0px 0px'}}>About</h1>
          <div className={styles.two} style={{ border:'1px soild biack', width:'50px',height:'1px'}}></div>
          <h2 style={{margin:'30px 270px'}}>瞅啥瞅，啥也没有</h2>  */}
        </div>
      </div>
    </Layout>
  );
  return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(first);