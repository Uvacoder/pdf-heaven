/*import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp*/

/*
    StartDate> 06/02/2022
    FinishDate> Currently Working
*/
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import '../styles/globalStyles.css'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
