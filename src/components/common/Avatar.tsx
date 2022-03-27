import styled from "styled-components";

interface AvatarProps {
    width?: String | Number,
    height?: Number,
    img: String
}

const Avatar = styled.span<AvatarProps>(props => ({
    borderRadius: '50%',
    width: props.width || 20,
    height: props.height || 20,
    background: `url(${props.img}) center / cover`,
}))


export default Avatar