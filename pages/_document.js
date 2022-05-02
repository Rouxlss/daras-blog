import Document, { Html, Head, Main, NextScript } from 'next/document'

const origin = (typeof window !== 'undefined') ? window.location.origin : ''

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" />
                    <meta property="og:title" content="Literatura y realidad" />
                    <meta property="og:description" content="Literatura salvadoreña" />
                    <meta property="og:image" content={`${origin}/img/banner.jpg`} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument