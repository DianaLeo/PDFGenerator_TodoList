import { Document, Page, Image, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
// import { FooterLogo } from './components/FooterLogo';
// import { PDFFAQ } from './components/PDFFAQ';
import logo from '../../Images/Logo.png';
//import QrSection from './QrSection';
import { FC } from 'react';
import PDFViewDocumentFooterIcon from './PDFViewDocumentFooterIcon';
import PDFViewDocumentFAQList from './PDFViewDocumentFAQList';
import { faq } from './PDFViewDocumentFAQContent';
import PDFViewDocumentFAQListItem from './PDFViewDocumentFAQListItem';
import PDFViewDocumentTerms from './PDFViewDocumentTerms';
import PDFViewDocumentQRSection from './PDFViewDocumentQRSection';
import { Farm } from '../../pages/PDFViewScreen';

const UNIVERSAL_HORIZONTAL_PADDING = 30;
const HEADER_HEAD = 60;
const FOOTER_HEAD = 40;
const PAGE_HEIGHT = 841;

type Props = {
    farm: Farm
}
const PDFViewScreenDocument: FC<Props> = (props) => {
    // Create Document Component
    return (
        <Document >
            <Page size="A4">
                <Header />
                <Body farm={props.farm}/>
                <Footer />
            </Page>
        </Document>
    );
}

const farm = {
    name: 'Happy Farm',
    url: 'https://happyfarm.com'
}
const Header: FC = () => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover Nature's Bounty at Your Fingertips!</Text>
        <View style={styles.headerLogo}>
            <Image src={logo} style={styles.headerLogoImage}></Image>
        </View>
    </View>
)
const Body: FC<Props> = (props) => (
    <View style={styles.body} wrap>
        <View style={styles.bodyDivider}></View>
        <PDFViewDocumentFAQList
            data={faq}
            renderItem={(item, index) =>
                <PDFViewDocumentFAQListItem key={`pdfViewDocumentFAQList${index}`} item={item} />
            } />
        <PDFViewDocumentQRSection farm={props.farm}/>
        <PDFViewDocumentTerms />
    </View>
)
const Footer: FC = () => (
    <View style={styles.footer}>
        <PDFViewDocumentFooterIcon />
        <Text>dianaleo♥0614@gmail.com♥</Text>
    </View>
)

// Create styles
const styles = StyleSheet.create({
    header: {
        height: HEADER_HEAD,
        backgroundColor: '#c1e3ca',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: UNIVERSAL_HORIZONTAL_PADDING,
        fontSize: 13.5,
        fontWeight: 400,
    },
    headerTitle: {
        flex: 1
    },
    headerLogo: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    headerLogoImage: {
        width: 100
    },
    body: {
        height: PAGE_HEIGHT - HEADER_HEAD - FOOTER_HEAD,
        paddingHorizontal: UNIVERSAL_HORIZONTAL_PADDING,
        flexWrap: 'wrap',
        alignContent: 'space-between',
        gap: 30,
        textAlign: 'justify',
        paddingTop: 30,
        position: 'relative'
    },
    bodyDivider: {
        width: 1,
        height: '100%',
        backgroundColor: 'lightgray',
        position: 'absolute',
        top: 20,
        left: '55%',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: UNIVERSAL_HORIZONTAL_PADDING,
        height: FOOTER_HEAD,
        fontSize: 11,
    }
});

export default PDFViewScreenDocument;