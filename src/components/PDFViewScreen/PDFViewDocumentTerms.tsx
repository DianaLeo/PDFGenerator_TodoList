import { StyleSheet, Text } from "@react-pdf/renderer";
import { FC } from "react";
import { CONTAINER_WIDTH } from "./PDFViewDocumentFAQListItem";

const PDFViewDocumentTerms: FC = () => {
    return (
        <Text style={styles.terms}>
            dafdafd afd afd af dafmda fd fd fd f df df da fd fd fd af dsa fda fda fd afd afdafgdagfgh fg f hgfshfjgdg fdsgfsdgh fsg fdgfsdgfsgf sdgfd fd fd f df df da fd fd fd af dsa fda fda fd afd afdafgdagfgh fg f hgfshfjgdg fdsgfsdgh fsg fdgfsdgfsgf sdgfd fd fd f df df da fd fd fd af dsa fda fda fd afd afdafgdagfgh fg f hgfshfjgdg fdsgfsdgh fsg fdgfsdgfsgf sdgfgfsdgfsgf fg
        </Text>
    )
}

const styles = StyleSheet.create({
    terms: {
        fontSize: 6,
        lineHeight: 1.5,
        color:'lightgray',
        width: CONTAINER_WIDTH,
    }
})

export default PDFViewDocumentTerms;