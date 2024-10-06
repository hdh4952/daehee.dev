export default function PostCard({tag, title, description, date}: {tag: string, title: string, description: string, date: string}) {
    return <div className='border border-red-400 w-11/12 lg:w-[800px] h-40 mb-8'>
        <div>tag: {tag}</div>
        <div>title: {title}</div>
        <div>description: {description}</div>
        <div>date: {date}</div>
    </div>
}