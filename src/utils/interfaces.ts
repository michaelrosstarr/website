interface NavItem {
    name: string,
    href: string
}

interface ProjectItem {
    name: string,
    description: string,
    link: string,
    stack: string[],
    id: string,
}

interface StackItem {
    link: string,
    image: string,
    name: string
}

interface PostTagItem {
    name: string,
    color: string
}

interface PostItem {
    id: string,
    title: string,
    tags: PostTagItem[],
    description: string,
    date: string,
    last_edited: string,
    slug: string,
    image: string,
    author: string,
}

export type { NavItem, ProjectItem, StackItem, PostItem, PostTagItem };