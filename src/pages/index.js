import React from 'react';

const Suspensed = (Element) => function suspense(props) {
  return (
    <React.Suspense fallback={<div />}>
      <Element {...props} />
    </React.Suspense>
  );
};

export default {
  Product: Suspensed(React.lazy(() => import('./Product'))),
  DetailShoes: Suspensed(React.lazy(() => import('./DetailShoes'))),
  Cart: Suspensed(React.lazy(() => import('./Cart'))), 
  Error404: Suspensed(React.lazy(() => import('./Error404'))),
};