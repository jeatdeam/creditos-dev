import {useEffect} from 'react';
import './creditos.css';
import firmaJeatdeamDev from './firmaJeatdeamDev.json';
import {AnimacionLottie} from './AnimacionLottie';
import {TextoEscritura} from './TextoEscritura';

const FUENTE_DOTO = 'https://fonts.googleapis.com/css2?family=Doto:wght@700&display=swap';

type PropsCreditos = {
    /** texto en tablet y escritorio */
    texto? : string,
    /** texto en celular, donde no entra el largo */
    textoCorto? : string,
    /** a donde lleva la firma */
    enlace? : string,
    className? : string,
}

// franja de creditos con la firma del desarrollador: va al final del footer de la pagina
export const Creditos = ({
    texto = 'Desarrollado y diseñado por:',
    textoCorto = 'Desarrollado por:',
    enlace = 'https://github.com/jeatdeam',
    className,
} : PropsCreditos) => {

    // la fuente pixelada Doto (Oliver Lalan) se carga una sola vez, aunque haya varios creditos en la pagina
    useEffect(() => {
        if (document.querySelector(`link[href="${FUENTE_DOTO}"]`)) return;
        const enlaceFuente = document.createElement('link');
        enlaceFuente.rel = 'stylesheet';
        enlaceFuente.href = FUENTE_DOTO;
        document.head.appendChild(enlaceFuente);
    }, []);

    return (
        <div className={`cd-creditos ${className ?? ''}`}>
            {/* el texto y la firma van siempre en una sola linea; en celular y tablet la firma es mas chica para que quepa */}
            <div className={"cd-contenido"}>
                <span className={"cd-solo-celular"}>
                    <TextoEscritura texto={textoCorto} className={"cd-texto"}/>
                </span>
                <span className={"cd-sin-celular"}>
                    <TextoEscritura texto={texto} className={"cd-texto"}/>
                </span>
                <a href={enlace} target="_blank" rel="noopener noreferrer" aria-label={"Portafolio de jeatdeam en GitHub"} className={"cd-enlace"}>
                    {/* la animacion es de 1000x420: la firma, la brocha y el "</>" ocupan ~66% del ancho y ~64% del alto, un poco a la derecha y arriba.
                        los margenes negativos recortan ese espacio vacio; al final se deshace en particulas y el ultimo cuadro queda vacio,
                        por eso con "reducir movimiento" se deja quieta en el cuadro 130, con la firma completa */}
                    <AnimacionLottie datos={firmaJeatdeamDev} cuadroReposo={130} className={"cd-firma"}/>
                </a>
            </div>
        </div>
    )
}
