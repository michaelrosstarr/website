import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getPageMetaData = (post: any) => {

    const getTags = (tags: any) => {
        const allTags = tags.map((tag: any, index: number) => {
            return { name: tag.name, color: tag.color };
        });

        return allTags;
    };

    return {
        id: post.id,
        title: post.properties.Name.title[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
        description: post.properties.Description.rich_text[0].plain_text,
        date: getToday(post.properties.Date.date.start),
        last_edited: getToday(post.properties.Date.last_edited_time),
        slug: post.properties.Slug.rich_text[0].plain_text,
        // image: post.properties.Image.files[0].file.url,
        image: "",
        author: post.properties.Author.rich_text[0].plain_text,
    };
};

export const getToday = (datestring: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date = new Date();

    if (datestring) {
        date = new Date(datestring);
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;

    return today;
};

export const getProjects = async () => {
    const projects = await notion.databases.query({
        database_id: process.env.PROJECTS_ID as string,
        sorts: [
            {
                property: 'Name',
                direction: 'ascending'
            }
        ]
    });

    return projects.results.map((project: any) => {
        return {
            name: project.properties.Name.title[0].plain_text,
            description: project.properties.Description.rich_text[0].plain_text,
            link: project.properties.URL.url,
            stack: project.properties.Stack.multi_select.map((item: any) => item.name),
            id: project.properties.ID.rich_text[0].plain_text
        }
    });
}

export const getProject = async (id: string) => {
    const projects = await notion.databases.query({
        database_id: process.env.PROJECTS_ID as string,
        filter: {
            property: "ID",
            formula: {
                string: {
                    equals: id,
                },
            },
        }
    });

    return projects.results.map((project: any) => {
        return {
            name: project.properties.Name.title[0].plain_text,
            description: project.properties.Description.rich_text[0].plain_text,
            link: project.properties.URL.url,
            stack: project.properties.Stack.multi_select.map((item: any) => item.name),
            id: project.properties.ID.rich_text[0].plain_text
        }
    });
}

export const getPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.DATABASE_ID as string,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    return posts.results.map((post: any) => {
        return getPageMetaData(post);
    });
}

export const getPostsByTag = async (tag: string) => {
    const posts = await notion.databases.query({
        database_id: process.env.DATABASE_ID as string,
        filter: {
            property: "Tags",
            multi_select: {
                contains: tag
            }
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    })

    return posts.results.map((post: any) => {
        return getPageMetaData(post);
    });
}

export const getPostsByAuthor = async (author: string) => {

    const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID as string,
        filter: {
            property: "Author",
            formula: {
                string: {
                    equals: author,
                },
            },
        },
        sorts: [
            {
                property: "Date",
                direction: "descending",
            },
        ],
    });

    return response.results.map((post: any) => {
        return getPageMetaData(post);
    })

}

export const getPost = async (slug: string) => {

    const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID as string,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
        metadata: metadata,
        markdown: mdString.parent ? mdString.parent : mdString,
    }
}
