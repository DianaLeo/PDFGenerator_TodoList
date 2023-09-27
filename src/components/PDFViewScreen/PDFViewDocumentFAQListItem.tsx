import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { FAQ } from "./PDFViewDocumentFAQContent";

export const CONTAINER_WIDTH = 248

type Props<T> = {
    item: T
}
const PDFViewDocumentFAQListItem: FC<Props<FAQ>> = ({ item }) => {
    const { question, answerParagraphs } = item;

    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>
            {
                answerParagraphs.map((paragraph, index) => (
                    paragraph.type === 'text' ? (
                        <Text key={`pdfViewDocumentFAQListItem${index}`} style={styles.answer}>{paragraph.content}</Text>
                    ) : (
                        <Bullets key={`pdfViewDocumentFAQListItem${index}`} contents={paragraph.content} />
                    )
                ))
            }
        </View>
    )
}


type BulletProps = {
    contents: string[]
}

const Bullets: FC<BulletProps> = ({ contents }) => (
    <>
        {contents.map((content, index) => (
            <Text key={`pdfViewDocumentFAQListItem${index}`} style={[styles.answer, styles.bullet]}> • {content}</Text>
        ))}
    </>
)

const styles = StyleSheet.create({
    container: {
        width: CONTAINER_WIDTH,
    },
    question: {
        fontSize: 14,
        lineHeight: 1.3,
    },
    answer: {
        fontSize: 10.5,
        lineHeight: 1.4,
        marginTop: 6,
    },
    bullet: {
        marginLeft: 12,
    }
})


export default PDFViewDocumentFAQListItem;