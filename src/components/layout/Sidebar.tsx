import React from 'react'
import styled from 'styled-components'
import logoLeft from '../../assets/images/lg.png'
import logoRight from '../../assets/images/logo.png'

const Logo = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 52
})

const LogoLeft = styled.img({
    height: 22
})

const LogoRight = styled.img({
    height: 14,
    marginLeft: 4
})

const Menu = styled.div({
    overflow: 'auto'
})

export default () => {
    return <React.Fragment>
        <Logo>
            <LogoLeft src={logoLeft} />
            <LogoRight src={logoRight} />
        </Logo>
        <Menu></Menu>
    </React.Fragment>
}