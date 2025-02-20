function Text({ content, className, margin = true }: { content: string | string[], className?: string; margin?: boolean }) {
    return (
        <section className={`${className}`}>
            {Array.isArray(content) && content.length ? (
                content.map((text, index) => (
                    <div key={index}>
                        <p dangerouslySetInnerHTML={{ __html: text }} className={`text-xl ${margin ? 'mb-2' : ''}`}></p>
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