/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import ReactDOM from "react-dom";

export const onServiceWorkerUpdateReady = () => {
    const root = document.body.appendChild(document.createElement("div"));
    ReactDOM.render(
        <div>
            <p>
                Site has been updated in the&nbsp;background.
                <br />
                Refresh to see the latest&nbsp;version.
            </p>
            <button onClick={() => window.location.reload(true)}>
                Refresh
            </button>
            <button onClick={() => document.body.removeChild(root)}>
                Close
            </button>
        </div>,
        root
    );
};
