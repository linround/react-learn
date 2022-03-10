import React, { Fragment } from 'react';

function ListItem({ item }) {
    return (
        <Fragment>
            <dt>{item.index}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    );
}

function Example() {
    return (
        <Fragment>
            <div>Hello</div>
            <div>World</div>
        </Fragment>
    );
}
function Home() {
    let item = {
        index:'1',
        description: 1000
    }
    return (
        <main style={{ padding: "1rem" }}>
            <ListItem item={item}></ListItem>
        </main>
    );
}

export default Example