import iconsSprite from "../../assets/icon/icon.svg"

type iconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

const Icon = (props: iconPropsType) => {
    return (
        <svg width={props.width || "105"} height={props.height || "100"} viewBox={props.viewBox || "0 0 105 100"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

export default Icon;