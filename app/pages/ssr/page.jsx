export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch("https://fakestoreapi.com/products");
    
    if (!res.ok) {
      throw new Error("Failed to fetch data from the API");
    }

    const repo = await res.json();

    // Pass data to the page via props
    return { props: { repo } };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { props: { repo: [] } }; // Return an empty array or handle the error as needed
  }
}

export default function Page({ repo }) {
  return (
    <div>
      {repo && repo.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.image} alt="" className='w-[200px] h-[200px]' />
        </div>
      ))}
    </div>
  );
}
