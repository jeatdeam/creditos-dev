import {useEffect, useRef} from 'react';

type DatosLottie = {op : number, ip : number};

// reproduce un json lottie en bucle. lottie-web usa el dom, por eso se importa dentro del efecto.
// cuadroReposo: cuadro que se deja quieto con "reducir movimiento" (por defecto el ultimo)
export const AnimacionLottie = ({datos, className, cuadroReposo} : {datos : DatosLottie, className? : string, cuadroReposo? : number}) => {

    const contenedor = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cancelado = false;
        let destruir = () => {};

        import('lottie-web/build/player/lottie_light').then(({default: lottie}) => {
            if (cancelado || !contenedor.current) return;
            const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const animacion = lottie.loadAnimation({
                container : contenedor.current,
                renderer : 'svg',
                loop : true,
                autoplay : !reducirMovimiento,
                // lottie modifica el objeto que recibe: se le pasa una copia
                animationData : structuredClone(datos),
            });
            destruir = () => animacion.destroy();

            if (reducirMovimiento) {
                // sin animacion se deja quieto el cuadro de reposo
                animacion.addEventListener('DOMLoaded', () => animacion.goToAndStop(cuadroReposo ?? datos.op - 1, true));
            }
        });

        return () => {
            cancelado = true;
            destruir();
        }
    }, [datos, cuadroReposo]);

    return <div ref={contenedor} className={className} aria-hidden={true}/>
}
