import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'

import AST from 'abstract-syntax-tree'
import matter from 'gray-matter'
import stringifyObject from 'stringify-object'
import readingTime from 'reading-time'

// mdx-annotations -Markdoc style annotation for MDX
// remark-gfm - To support Github Flavoured Markdown support
export const remarkPlugins = [
  mdxAnnotations.remark,
  remarkGfm,
  remarkFrontmatter,
  frontmatterRemarkPlugin,
]

function frontmatterRemarkPlugin() {
  return (tree, file) => {
    // Create a full path slug
    const actualPath = file.path.replace(`${file.cwd}/src/pages`, '')
    const justPath = actualPath.replace(file.basename, '')
    const fullPath = `${justPath}${file.stem === 'index' ? '' : file.stem}`

    const { data: frontMatter, content } = matter(file.value)
    const { text } = readingTime(content)
    frontMatter.timeToRead = text
    frontMatter.path = fullPath

    const EXPORT = `export const frontMatter = ${stringifyObject(frontMatter)}`

    tree.children.unshift({
      type: 'mdxjsEsm',
      value: EXPORT,
      data: {
        estree: AST.parse(EXPORT),
      },
    })

    if (tree.children[0].type === 'thematicBreak') {
      const firstHeadingIndex = tree.children.findIndex(
        (t) => t.type === 'heading'
      )
      if (firstHeadingIndex !== -1) {
        // we will mutate the tree.children by removing these nodes
        tree.children.splice(0, firstHeadingIndex + 1)
      }
    }
  }
}
