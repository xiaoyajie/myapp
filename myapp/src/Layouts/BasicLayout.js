import { Layout, Menu, Breadcrumb, Icon, Carousel } from 'antd';
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
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const layout = (
      <Layout>
        {/* <Sider
          breakpoint="xs"
          style={{ background: '#fff', padding: 0 }}
          // collapsedWidth="0" 不显示图标，全部折叠进去
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        > */}
        <Sider
          breakpoint="xs"
          style={{ background: '#fff', padding: 0 }}
          // collapsedWidth="0" 不显示图标，全部折叠进去
          trigger={null}
          collapsible
        //   collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <Link to="/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>宠物</h1>
            </Link>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            // style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="smile" /><span>宠物猫</span></span>}>
              <Menu.Item key="1"><Link to="/first">波斯猫</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/second">加菲猫</Link></Menu.Item>
              <Menu.Item key="3">option3</Menu.Item> 
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>宠物狗</span></span>}>
              <Menu.Item key="5"><Link to="/fifth">哈士奇</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/sixth">萨摩耶</Link></Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" /><span>小型宠物</span></span>}>
              <Menu.Item key="9"><Link to="/ninth">仓鼠</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/tenth">王建</Link></Menu.Item>
              <Menu.Item key="11"><Link to="/eleventh">时瑞涛</Link></Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header> */}

          <Breadcrumb style={{ margin: '13px 0 0 18px' }}>
            <Breadcrumb.Item><Link to="/a">首页</Link></Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff'}}>
            <Switch>
            <Route path="/fifth" render={() => < img src="http://c1.cdn.goumin.com/cms/petschool/day_150124/20150124_59cd16a.jpg" alt="这是一张图片" />} />
            <Route path="/sixth" render={() => < img src="http://img.mp.sohu.com/upload/20170524/462ac635ac5c49ec8651304d50fdc4b3_th.png" alt="这是一张图片" style={{width:'300px',height:'300px'}} />} />
            <Route path="/ninth" render={() => < img src="http://a3.att.hudong.com/37/24/19300001100337129465247986358_950.jpg" alt="这是一张图片" style={{width:'300px',height:'300px'}} />} />
            <Route path="/first" render={() => < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMoOECyV_ypnUTAelQX3rpefcstP0oFLIg6yRBu2-AnZOPUQNDbw" alt="这是一张图片" style={{width:'300px',height:'300px'}}/>} />
            <Route
                path="/a" render={() =>
                <Carousel classname={styles.move} autoplay> 
                    <div>< img src="http://imgs18.iaweg.com/pic/HTTP2ltZzMuM2xpYW4uY29tLzIwMTMvYzIvNjQvZC82NS5qcGclog.jpg" alt="这是一张图片" style={{ width: '100%', height: '400px' }} /></div>
                    <div>< img src="http://sinastorage.com/storage.caitou.sina.com.cn/products/201709/8ff4253fa4d1c97fca3762e3e6e169b7.png"alt="这是一张图片" style={{ width: '100%' ,height:'400px'}} /></div>
                    <div>< img src="http://www.ixiupet.com/uploads/allimg/160622/2-1606221044550-L.jpg" alt="这是一张图片" style={{ width: '100%',height:'400px' }} /></div>
                    <div>< img src="http://yiqizouguoderizi.com/content/uploadfile/201512/f3cc1449033604.jpg" alt="这是一张图片" style={{ width: '100%', height:'400px'}} /></div>
                </Carousel>
                }
            />
            </Switch>
          </Content>
          <Footer className={this.state.Footer} >
          </Footer>
        </Layout>
      </Layout>
    );

    return (
      <ContainerQuery query={query}>
        {params => <div className={classnames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(BasicLayout);