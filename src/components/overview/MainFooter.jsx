export function MainFooter() {
    return (
        <div className="not-prose w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2 px-10">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base font-semibold">
                            Join our community
                        </p>
                    </div>
                    <p>
                        Join our slack channel to chat with us and become part
                        of the pricing ops conversation.
                    </p>
                </div>
                <div className="flex flex-col gap-2 px-10">
                    <div className="flex items-center gap-3">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base font-semibold">Need help?</p>
                    </div>
                    <p>
                        Contact us using slack, email or Twitter to get answers
                        to your queries.
                    </p>
                </div>
            </div>
        </div>
    );
}
