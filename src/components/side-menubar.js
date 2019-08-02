import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from "antd";

const { Sider } = Layout;

const SideMenuBar = () => {
    return (
        <Sider width={200} style={{ background: "#fff" }}>
            <Menu mode="inline" defaultSelectedKeys={["0"]} className="main-menu">
                <Menu.Item key="0">
                    <NavLink to="/">
                        <span>
                            <Icon type="dashboard" />
                            Dashboard
                        </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="1">
                    <NavLink to="/transactions">
                        <span>
                            <Icon type="swap" />
                            Transactions
                        </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to="/users">
                        <span>
                            <Icon type="team" />
                            Users
                        </span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/about">
                        <span>
                            <Icon type="profile" />
                            About
                        </span>
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SideMenuBar;
