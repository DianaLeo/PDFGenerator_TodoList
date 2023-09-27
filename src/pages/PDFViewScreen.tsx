import { Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { FunctionComponent } from 'react';
import PDFViewScreenDocument from '../components/PDFViewScreen/PDFViewDocument';

export type Farm = {
  name:string
  url:string
}
const farm = {
  name:'Happy farm',
  url:'https://happyharm.com'
}

const PDFViewScreen: FunctionComponent = () => {
  // Create Document Component
  return (
    <PDFViewer style={styles.viewer}>
      <PDFViewScreenDocument farm={farm}/>
    </PDFViewer>

  );
}

export default PDFViewScreen;

// Create styles
const styles = StyleSheet.create({
  viewer: {
    paddingHorizontal: 30,
    width: '100vw',
    minHeight: '100vh',
  }
});