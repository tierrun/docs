import {
    Children,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState
} from 'react';
import {Tab} from '@headlessui/react';
import clsx from 'clsx';
import {create} from 'zustand';

const languageNames = {
    js: 'JavaScript',
    ts: 'TypeScript',
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    php: 'PHP',
    python: 'Python',
    ruby: 'Ruby',
    go: 'Go',
    elixir: 'Elixir'
};

function getPanelTitle({title, language}) {
    return title ?? languageNames[language] ?? 'Code';
}

function ClipboardIcon(props) {
    return (
        <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Z" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
    );
}

function CopyButton({code}) {
    let [copyCount, setCopyCount] = useState(0);
    let copied = copyCount > 0;

    useEffect(() => {
        if (copyCount > 0) {
            let timeout = setTimeout(() => setCopyCount(0), 1000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [copyCount]);

    return (
        <button
            type="button"
            className={clsx(
                'group/button absolute top-3.5 right-4 overflow-hidden rounded-lg py-2 pl-2 pr-3 text-xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
                copied
                    ? 'bg-blue-400/10 ring-1 ring-inset ring-blue-400/20'
                    : 'hover:bg-slate-100/7.5 bg-slate-100/5 '
            )}
            onClick={() => {
                window.navigator.clipboard.writeText(code).then(() => {
                    setCopyCount(count => count + 1);
                });
            }}>
            <span
                aria-hidden={copied}
                className={clsx(
                    'pointer-events-none flex items-center gap-1 text-slate-400 transition duration-300',
                    copied && '-translate-y-1.5 opacity-0'
                )}>
                <ClipboardIcon className="w-5 h-5 transition-colors stroke-slate-500 group-hover/button:stroke-slate-400" />
                Copy
            </span>
            <span
                aria-hidden={!copied}
                className={clsx(
                    'pointer-events-none absolute inset-0 flex items-center justify-center text-blue-400 transition duration-300',
                    !copied && 'translate-y-1.5 opacity-0'
                )}>
                Copied!
            </span>
        </button>
    );
}

function CodePanelHeader({label}) {
    if (!label) {
        return null;
    }

    return (
        <div className="border-b-white/7.5 bg-white/2.5 dark:bg-white/1 flex h-9 items-center gap-2 border-y border-t-transparent bg-zinc-900 px-4 dark:border-b-white/5">
            {label && (
                <span className="font-mono text-xs text-zinc-400">{label}</span>
            )}
        </div>
    );
}

function CodePanel({label, code, children}) {
    let child = Children.only(children);

    return (
        <div className="group">
            <CodePanelHeader label={child.props.label ?? label} />
            <div className="relative">
                <pre className="overflow-x-auto p-4 font-mono text-caption text-slate-100 scrollbar:!h-2 scrollbar:!w-2  scrollbar:bg-transparent scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-500/50 ">
                    {children}
                </pre>
                <CopyButton code={child.props.code ?? code} />
            </div>
        </div>
    );
}

function CodeGroupHeader({title, children, selectedIndex}) {
    let hasTabs = Children.count(children) > 1;

    if (!title && !hasTabs) {
        return null;
    }

    return (
        <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-slate-700 bg-slate-800 px-4">
            {title && (
                <h3 className="pt-3 mr-auto text-caption text-slate-100">
                    {title}
                </h3>
            )}
            {hasTabs && (
                <Tab.List className="flex gap-4 -mb-px text-caption">
                    {Children.map(children, (child, childIndex) => (
                        <Tab
                            className={clsx(
                                'border-b py-3 outline-none transition focus:[&:not(:focus-visible)]:outline-none',
                                childIndex === selectedIndex
                                    ? 'border-blue-500 text-blue-400'
                                    : 'border-transparent text-slate-400 hover:text-slate-300'
                            )}>
                            {getPanelTitle(child.props)}
                        </Tab>
                    ))}
                </Tab.List>
            )}
        </div>
    );
}

function CodeGroupPanels({children, ...props}) {
    let hasTabs = Children.count(children) > 1;

    if (hasTabs) {
        return (
            <Tab.Panels>
                {Children.map(children, child => (
                    <Tab.Panel>
                        <CodePanel {...props}>{child}</CodePanel>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        );
    }

    return <CodePanel {...props}>{children}</CodePanel>;
}

function usePreventLayoutShift() {
    let positionRef = useRef();
    let rafRef = useRef();

    useEffect(() => {
        return () => {
            window.cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return {
        positionRef,
        preventLayoutShift(callback) {
            let initialTop = positionRef.current.getBoundingClientRect().top;

            callback();

            rafRef.current = window.requestAnimationFrame(() => {
                let newTop = positionRef.current.getBoundingClientRect().top;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}

const usePreferredLanguageStore = create(set => ({
    preferredLanguages: [],
    addPreferredLanguage: language =>
        set(state => ({
            preferredLanguages: [
                ...state.preferredLanguages.filter(
                    preferredLanguage => preferredLanguage !== language
                ),
                language
            ]
        }))
}));

function useTabGroupProps(availableLanguages) {
    let {preferredLanguages, addPreferredLanguage} =
        usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = useState(0);
    let activeLanguage = [...availableLanguages].sort(
        (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
    )[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }

    let {positionRef, preventLayoutShift} = usePreventLayoutShift();

    return {
        as: 'div',
        ref: positionRef,
        selectedIndex,
        onChange: newSelectedIndex => {
            preventLayoutShift(() =>
                addPreferredLanguage(availableLanguages[newSelectedIndex])
            );
        }
    };
}

const CodeGroupContext = createContext(false);

export function CodeGroup({children, title, ...props}) {
    let languages = Children.map(children, child => getPanelTitle(child.props));
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = Children.count(children) > 1;
    let Container = hasTabs ? Tab.Group : 'div';
    let containerProps = hasTabs ? tabGroupProps : {};
    let headerProps = hasTabs
        ? {selectedIndex: tabGroupProps.selectedIndex}
        : {};

    return (
        <CodeGroupContext.Provider value={true}>
            <Container
                {...containerProps}
                className="my-6 overflow-hidden rounded-lg shadow-md not-prose bg-slate-900 ring-1 ring-slate-700">
                <CodeGroupHeader title={title} {...headerProps}>
                    {children}
                </CodeGroupHeader>
                <CodeGroupPanels {...props}>{children}</CodeGroupPanels>
            </Container>
        </CodeGroupContext.Provider>
    );
}

export function Code({children, ...props}) {
    let isGrouped = useContext(CodeGroupContext);

    if (isGrouped) {
        return <code {...props} dangerouslySetInnerHTML={{__html: children}} />;
    }

    return <code {...props}>{children}</code>;
}

export function Pre({children, ...props}) {
    let isGrouped = useContext(CodeGroupContext);

    if (isGrouped) {
        return children;
    }

    return <CodeGroup {...props}>{children}</CodeGroup>;
}
