export const getQuote = async () => {
	const req = await fetch(
		`https://animechan.vercel.app/api/random/anime?title=shingeki+no+kyojin`
	);
	const res = await req.json();
	return res;
};
