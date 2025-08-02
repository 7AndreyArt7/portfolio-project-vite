type FontPropsType = {
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
    Fmin?: number;
    Fmax?: number;

}

export const font = ({fontFamily, fontWeight, lineHeight, color, Fmin, Fmax}: FontPropsType  ) => `
  font-family: ${fontFamily || "Poppins"} ;  
  font-weight: ${fontWeight ||  400} ;
  color: ${color};
  line-height: ${lineHeight || 1.2};
  
  font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`