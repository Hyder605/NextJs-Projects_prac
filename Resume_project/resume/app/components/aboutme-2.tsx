

export const AboutMe2=({data})=>{
    const{title,body}=data
    return(
        <>
        <section className='bg-grey-light p-4 drop-shadow-md'>
        <h1>{title}</h1>
        <div className="bg-green-200 h-1"/>
        <p className="mx-5 text-lg">{body}</p>
        </section>
        </>
    )
}