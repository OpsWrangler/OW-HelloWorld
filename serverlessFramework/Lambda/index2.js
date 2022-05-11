export async function hello(event) {
  return {
    body: JSON.stringify({message: 'HELLO_WORLD'}),
    statusCode: 200,
  };
}
