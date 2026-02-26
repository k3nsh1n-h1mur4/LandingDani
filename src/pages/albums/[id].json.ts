import type { APIRoute } from "astro"

const usernames = ["Sarah", "Chris", "Yan"];

export const GET = (({ params, request }) => {
	const id = params.id;
	const url = new URL(request.url).pathname;

	console.log(url);

	return new Response(
		JSON.stringify({
			name: usernames[id],
			path: new URL(request.url).pathname,
		}),
	);
}) satisfies APIRoute;


export function getStaticPaths() {
	return [
		{ params: { id: "0" } },
		{ params: { id: "1" } },
		{ params: { id: "2" } },
	];
}
