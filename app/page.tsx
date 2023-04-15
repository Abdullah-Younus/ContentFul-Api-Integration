
async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIROMENT}/entries?access_token=${process.env.CONTENTFUL_TOKEN}&content_type=article`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {

  const blogs = await getBlogs();
  console.log('Blogs ===>', blogs);
  return (
    <>
      <ul>
        {blogs.items.map((item: any) => (
          <li key={item.sys.id}>
            {item.fields.title}
          </li>
        ))}
      </ul>
    </>
  )
}
