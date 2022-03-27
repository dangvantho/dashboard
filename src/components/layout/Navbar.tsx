import React from "react";
import styled from "styled-components";
import { Menu, Search } from '@styled-icons/material';
import { Notifications } from '@styled-icons/material-outlined'
import userImage from '../../assets/images/users/user-5.jpg'
import Avatar from "../common/Avatar";

interface NavbarProps {
    toggleSidebar: React.MouseEventHandler
}

const Navbar = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: "center",
    height: 52,
    borderBottom: '1px solid #e3ebf6'
})
const MenuIcon = styled(Menu)`
    margin: 0 0.75rem;
    cursor: pointer;
`

const Info = styled.div({
    display: 'flex',
    alignItems: 'center'
})

const SearchIcon = styled(Search)({
    margin: ' 0 1.25rem',
    color: '#7081b9'
})

const NotificationsIcon = styled(Notifications)({
    margin: ' 0 1.25rem',
    color: '#7081b9'
})

const User = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    margin: ' 0 1.25rem',
})


export default (props: NavbarProps) => {
    const { toggleSidebar } = props
    return <Navbar>
        <MenuIcon size={24} onClick={toggleSidebar} />
        <Info>
            <SearchIcon size={24} />
            <NotificationsIcon size={24} />
            <User>
                Tho
                <Avatar img={userImage} width={30} height={30} />
            </User>
        </Info>
    </Navbar>
}