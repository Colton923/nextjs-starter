export default function Home() {
  const getPostCount = async () => {
    try {
      await fetch('api/postsCount').then((response) => {
        console.log(response)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={getPostCount}>Get Post Count</button>

    </div>
  );
}
