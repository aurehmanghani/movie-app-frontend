import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import { NavLink as Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function App(){
	return(
		<Router>

		<Layout>
			<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={broken => {
				console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				console.log(collapsed, type);
			}}
			>
			<div className="logo" />
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			
				<Menu.Item key="1" icon={<UserOutlined />}>
				<Link to='/' >
					Home
				</Link>
				</Menu.Item>

				<Menu.Item key="2" icon={<VideoCameraOutlined />}>
				<Link to='/signup' >
					Signup
				</Link>
				</Menu.Item>

				<Menu.Item key="3" icon={<UploadOutlined />}>
				<Link to='/signin' >
					Signin
				</Link>
				</Menu.Item>

				<Menu.Item key="4" icon={<UserOutlined />}>
				<Link to='/signup' >
					About Us
				</Link>
				</Menu.Item>
			</Menu>
			
			</Sider>
			<Layout>
			<Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
			<Content style={{ margin: '24px 16px 0' }}>
				<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/signup' exact component={SignUp} />
					<Route path='/signin' exact component={SignIn} />
					<Route path='/about' component={About} />
				</Switch>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</Layout>
		</Router>
	);
}

// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

// function App() {
// return (
// 	<Router>
// 	<Navbar />
// 	<Switch>
// 		<Route path='/' exact component={Home} />
//     	<Route path='/signup' exact component={SignUp} />
//     	<Route path='/signin' exact component={SignIn} />
// 		<Route path='/about' component={About} />
// 	</Switch>
// 	</Router>
// );
// }

export default App;




//import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import SearchBoxContainer from './conrainer/SearchBoxContainer' 
// import SearchResultContainer from './conrainer/SearchResultContainer'

// function App() {
//   return (
//     <div className="container">
//       <SearchBoxContainer/>
//       <SearchResultContainer/>
//     </div>
//   );
// }

// export default App;
