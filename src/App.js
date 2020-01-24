import React, { lazy, Suspense } from 'react';
import { importMDX } from 'mdx.macro';
import styled from 'styled-components';

const Content = lazy(() => importMDX('./Content.mdx'));

const Container = styled.div`
  padding: 10px 15px;
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<p>...</p>}>
        <Content />
      </Suspense>
    </Container>
  );
}

export default App;
