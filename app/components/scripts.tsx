"use client";

import Script from 'next/script'

export const Scripts = () => {
    return (
        <div>
            <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=641d471fd3455b282e312af5" strategy="beforeInteractive" />
            <Script src="https://code.jquery.com/ui/1.13.1/jquery-ui.min.js" strategy="beforeInteractive" />
            <Script src="/script.js" />
        </div>
    )
}