import '../style/globals.css';
import WhatsAppIcon from '../components/WhatsAppIcon';
import ScrollToTopButton from '../components/ScrollToTopButton';
export default function App ({Component, pageProps}) {
    return (
        <> <Component {...pageProps} />
    <WhatsAppIcon />
    <ScrollToTopButton />
    </>
    );
}

