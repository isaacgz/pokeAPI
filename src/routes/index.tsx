import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {

  const pokemonId = useSignal(1);
  const showBackImage = useSignal(false);
  const showImage = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;

  })

  return (
    <>
      
      <span class="text-2xl font-bold">Buscador simple</span>

      <span class="text-9xl">{ pokemonId }</span>

      <PokemonImage id={ pokemonId.value } backImage={showBackImage.value} isVisible={showImage.value} />



      <div class="mt-2">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => changePokemonId(+1) } class="btn btn-primary mr-2">Siguiente</button>
        <button onClick$={ () => showBackImage.value = !showBackImage.value } class="btn btn-primary mr-2">Voltear</button>
        <button onClick$={ () => showImage.value = !showImage.value } class="btn btn-primary">Revelar</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "es una prueba",
      content: "Qwik site description",
    },
  ],
};
