export function Card({ title, children, className }) {
    return (
        <div className={['bg-white border border-black text-neutral-800', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-3 sm:gap-4 px-4 py-5 sm:px-6 sm:py-6">
                {title && <h3 className="text-black">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
