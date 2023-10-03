function SectionText(props: { title: string, className?: string }) {
    return (
        <div>
            <h1 className={props.className} >{props.title}</h1>
        </div>
    )
}

export default SectionText;