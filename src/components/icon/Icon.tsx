import iconsSprite from "../../assets/icon/icon.svg"
import styled from "styled-components";

type iconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

const Icon = (props: iconPropsType) => {
    return (
        <SvgIcon width={props.width || "105"} height={props.height || "100"} viewBox={props.viewBox || "0 0 105 100"}
                 fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </SvgIcon>
    );
};

export default Icon;

const SvgIcon = styled.svg`
    &:hover {
        transform: scale(1.2);
    }
`