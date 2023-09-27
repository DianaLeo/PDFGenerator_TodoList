import { StyleSheet, View, Text, Image, Link } from "@react-pdf/renderer";
import { FC, useEffect, useState } from "react";
import { CONTAINER_WIDTH } from "./PDFViewDocumentFAQListItem";
import { Farm } from "../../pages/PDFViewScreen";
import QRCode from 'qrcode';

type Props = {
    farm: Farm
}

function isNonEmptyString(input: string | null | undefined): boolean {
return typeof input === 'string' && input.length>0
}

const PDFViewDocumentQRSection: FC<Props> = ({farm}) => {
    const [imgSrc, setImgsrc] = useState('')
    useEffect(() => {
        generateQRCode()
    }, [])
    const generateQRCode = async () => {
        try {
            const result = await QRCode.toDataURL(farm.url);
            setImgsrc(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.qrcodeWrapper}>
                {isNonEmptyString(imgSrc) && <Image src={imgSrc}/>}
            </View>
            <Link style={styles.description} src={farm.url}>
                Welcome to <Text style={styles.bold}>{farm.name}</Text>! Scan the QR code to get started.
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
        height: 108,
        backgroundColor: '#e7ebe6',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 14
    },
    qrcodeWrapper: {
        width: 76,
        aspectRatio: 1,
        backgroundColor: 'white'
    },
    description: {
        flex: 1,
        textDecoration: 'underline',
        fontSize: 10,
        lineHeight: 1.5,
        color:'black'
    },
    bold: {
        fontWeight: 'bold'
    }
})

export default PDFViewDocumentQRSection;