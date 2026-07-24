import React, {useEffect, useRef} from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import spec from '@site/openapi/public-api.json';

function SwaggerUIPage(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    require('swagger-ui-dist/swagger-ui.css');
    const SwaggerUIBundle = require('swagger-ui-dist/swagger-ui-bundle');
    SwaggerUIBundle({
      spec,
      domNode: containerRef.current,
      presets: [SwaggerUIBundle.presets.apis],
      layout: 'BaseLayout',
    });
  }, []);

  return <div ref={containerRef} />;
}

export default function Home(): React.ReactElement {
  return (
    <Layout title="API Reference" description="Dokumentasi REST API publik Anime Stream">
      <BrowserOnly>{() => <SwaggerUIPage />}</BrowserOnly>
    </Layout>
  );
}
