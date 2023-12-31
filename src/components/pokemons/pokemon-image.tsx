import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
    id: number;
    size?: number;
    backImage: boolean;
    isVisible?: boolean;
}

export const PokemonImage = component$(( { id, size = 200, backImage = false, isVisible = false }: Props ) => {

    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
        track(() => id );

        imageLoaded.value = false;
    });

    const back = backImage ? 'back/' : '';

    return (
        <div class="flex items-center justify-center"
            style={{ width:`${ size }px`, height: `${ size }pz` }}>
            { !imageLoaded.value && <span class="text-2xl">Cargando...</span>}
            
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ back + id }.png`} 
                alt="Pokemon Sprite"
                style={{ width: `${ size }px`}} 
                onLoad$={ () => {
                    // setTimeout(() => {
                        imageLoaded.value = true;
                    // }, 2000);
                }}
                class={[{
                    'hidden': !imageLoaded.value,
                    'brightness-0': isVisible
                }, 'transition-all']}
            />
      </div>
    )
})