export function Card({ title, children, className }) {
    return (
        <div className={[
            'bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm',
            'border border-neutral-200/50 dark:border-neutral-700/50',
            'text-neutral-800 dark:text-neutral-200',
            'rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500',
            'hover:-translate-y-2 overflow-hidden group relative',
            className
        ].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-3 sm:gap-4 px-5 py-6 sm:px-7 sm:py-7 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#818cf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{
                         background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)',
                         padding: '1px',
                         WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                         WebkitMaskComposite: 'xor',
                         maskComposite: 'exclude'
                     }} />
                
                {title && (
                    <h3 className="relative z-10 text-neutral-900 dark:text-neutral-100 group-hover:text-[#6366f1] dark:group-hover:text-[#818cf8] transition-colors duration-300">
                        {title}
                    </h3>
                )}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
