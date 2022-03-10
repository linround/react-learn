import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
export default function Home() {
    return (
        <main style={{ padding: "1rem" }}>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </main>
    );
}