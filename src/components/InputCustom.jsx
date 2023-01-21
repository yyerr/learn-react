export default function InputCustom({ type = 'text', ...props }) {
    return (
        <input
            {...props}
            className='w-full focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-sm rounded-lg'
            type={type}
        />
    );
}
