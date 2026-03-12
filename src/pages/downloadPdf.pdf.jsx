export const GET = ({ request }) => {
  <a href="/ComisiondeSalud.pdf">Pdf</a>
  return new Response(
    JSON.stringify({
      path: new URL(request.url).pathname,
    })
  )
}
