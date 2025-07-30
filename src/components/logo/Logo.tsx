import Icon from "../icon/Icon.tsx";

type LogoPropsType = {
    iconId?: string;
    height?:string;
    width?:string;
    viewBox?:string;
}

export const Logo = (props:LogoPropsType) => {
    return (
        <a href={"#"}>
            <Icon iconId={props.iconId || "logo"} height={props.height || "60"} width={"60"} viewBox={props.viewBox || "0 0 60 60"}/>
        </a>
    );
};

