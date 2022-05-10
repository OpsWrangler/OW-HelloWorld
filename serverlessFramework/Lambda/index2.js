export async function main(event) {
  return {
    body: JSON.stringify({message: 'HELLO_WORLD'}),
    statusCode: 200,
  };
}
