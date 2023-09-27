//Generic rendering method for 

type Props<T> = {
    data: T[]
    renderItem: (item: T,index:number) => React.ReactNode
}

//same as 
//function PDFViewDocumentFAQList<T>(props:Props<T>){ }
const PDFViewDocumentFAQList = <T,>(props: Props<T>) => {
    return (
        <>
            {props.data.map((item,index) => props.renderItem(item,index))}
        </>
    )
}

export default PDFViewDocumentFAQList;