export function Card({ title, children, className }) {
    return (
        <div className={[
            'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200',
            'rounded-lg shadow-sm hover:shadow-md transition-all duration-300',
            'hover:-translate-y-0.5 overflow-hidden group',
            className
        ].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-2 sm:gap-3 px-3 py-3 sm:px-4 sm:py-4 relative">
                {title && (
                    <h3 className="relative z-10 text-neutral-900 dark:text-neutral-100">
                        {title}
                    </h3>
                )}
                <div className="relative z-10">
                    {children}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </div>
    );
}
