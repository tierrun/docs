import * as React from 'react';

export const Button = () => {
    return (
        <div className="rounded-md ">
            <a href="https://tier.run">
                <div className="ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-md ui-border ui-border-transparent ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-no-underline ui-bg-white ui-text-red-500 hover:ui-bg-gray-300 md:ui-py-3 md:ui-px-10 md:ui-text-lg md:ui-leading-6">
                    Let's go
                    <span className="ui-ml-2 ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-bg-clip-text ui-text-transparent">
                        →
                    </span>
                </div>
            </a>
        </div>
    );
};
