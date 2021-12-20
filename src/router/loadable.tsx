import { Suspense, FC, LazyExoticComponent } from 'react';

interface P {
  loader: () => LazyExoticComponent<FC>;
}

const Loadable: FC<P> = ({ loader }) => {
  const LoaderComponent = loader();
  return (
    <Suspense fallback={<>...</>}>
      <LoaderComponent />
    </Suspense>
  );
};

export default Loadable;
