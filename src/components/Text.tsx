function Text({ content, className, margin = true, innerClassName }: { content: string | string[], className?: string; margin?: boolean; innerClassName?: string}) {
    return (
        <section className={`${className}`}>
            {Array.isArray(content) && content.length ? (
                content.map((text, index) => (
                    <div key={index}>
                        <p dangerouslySetInnerHTML={{ __html: text }} className={`text-xl ${margin ? 'sm:mb-2' : ''} ${innerClassName}`}></p>
                    </div>

                )))
                : (
                    <p>{content}</p>
                )
            }
        </section >
    )
}

export default Text