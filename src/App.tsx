import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense, useState } from 'react';

import Panel from './components/organisms/Panel';
import SelectionMenuSection from './components/organisms/SelectionMenuSection';
import EmptySelectionSection from './components/atoms/EmptySelectionSection';
import Loading from './components/atoms/Loading';

const queryClient = new QueryClient();

export default function App() {
  const [pokemonUrl, setPokemonUrl] = useState('');

  const hasSelection = pokemonUrl !== '';

  return (
    <QueryClientProvider client={queryClient}>
      <main className="grid h-svh grid-cols-[max-content_1fr]">
        <SelectionMenuSection
          pokemonURL={pokemonUrl}
          handleClick={(url: string) => setPokemonUrl(url)}
        />
        <section className="overflow-y-scroll">
          <Suspense fallback={<Loading title="loading menu">Fetching info...</Loading>}>
            {hasSelection ? <Panel pokemonURL={pokemonUrl} /> : <EmptySelectionSection />}
          </Suspense>
        </section>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
