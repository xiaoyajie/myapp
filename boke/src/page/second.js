import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel, Button, DatePicker, Card } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';
import styles from './second.less';
// import { Link } from 'dva/router';
// import styles from './BasicLayout.less';
// import GlobalFooter from '../components/GlobalFooter';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
// const { MonthPicker, RangePicker, WeekPicker } = DatePicker

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

const boxs = [
  {
    box: '1'
  }, {
    box: '2'
  }, {
    box: '3'
  }, {
    box: '3'
  }, {
    box: '3'
  }, {
    box: '3'
  }
]

class second extends React.Component {
 
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
      <Layout>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <img src="http://demo.cssmoban.com/cssthemes4/tops_36_rabbit/assets/images/work.jpg" alt="这是一张图片" style={{ margin: '10px', width: '100%', height: this.state.windowHeight}} />
          </div>
          <div className={styles.right}>
            <div>
              <Button style={{ width: '150px', height: '45px', margin: '30px' }}><Link to="/">返回首页</Link></Button>
            </div>
            <div>
              {boxs.map((box) => {
                return (
                  <div>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                      <Card title="Card title" bordered={false} style={{ width: '100%', height: '200px' }}>
                        <p>qwertyuioxcvvggbhjjjjcvghjkcvghjkfghbjnkghjkghjmghuihjkghjgbhnj</p>
                      </Card>
                    </div>
                  </div>
                )
              }
              )
              }
            </div>
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
export default connect()(second);