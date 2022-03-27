import { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";


interface LayoutProps {
    showSidebar?: Boolean;
}

const Layout = styled.div<LayoutProps>(props => ({
    overflow: 'hidden',
    fontSize: '1.6rem',
}))

const SidebarLayout = styled.div<LayoutProps>(props => ({
    width: props.showSidebar ? '230px' : 0,
    position: 'fixed',
    top: 0,
    bottom: 0,
    transition: '0.3s',
    borderRight: '1px solid #e3ebf6',
    minHeight: '100vh',
    overflow: 'auto',
    '@media(max-width: 760px)': {
        top: 52,
    }
}))

const Main = styled.div<LayoutProps>(props => ({
    marginLeft: props.showSidebar ? '230px' : 0,
    transition: '0.3s',
    '@media(max-width: 760px)': {
        marginLeft: 0,
    }
}))


function DefaultLayout() {
    const [showSidebar, setSidebar] = useState<Boolean>(true)
    return <Layout>
        <SidebarLayout showSidebar={showSidebar}>
            <Sidebar />
        </SidebarLayout>
        <Main showSidebar={showSidebar}>
            <Navbar toggleSidebar={() => setSidebar(!showSidebar)} />
        </Main>
    </Layout>
}

export default DefaultLayout

