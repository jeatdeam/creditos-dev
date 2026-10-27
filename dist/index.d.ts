import * as react from 'react';

type PropsCreditos = {
    /** texto en tablet y escritorio */
    texto?: string;
    /** texto en celular, donde no entra el largo */
    textoCorto?: string;
    /** a donde lleva la firma */
    enlace?: string;
    className?: string;
};
declare const Creditos: ({ texto, textoCorto, enlace, className, }: PropsCreditos) => react.JSX.Element;

export { Creditos };
