import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function unauthorizedResponse() {
	return new NextResponse("Authentication required.", {
		status: 401,
		headers: {
			"WWW-Authenticate": 'Basic realm="Protected Area"',
		},
	});
}

export function middleware(request: NextRequest) {
	const isBasicAuthEnabled = process.env.BASIC_AUTH_ENABLED === "true";

	if (!isBasicAuthEnabled) {
		return NextResponse.next();
	}

	const username = process.env.BASIC_AUTH_USERNAME;
	const password = process.env.BASIC_AUTH_PASSWORD;

	if (!username || !password) {
		return unauthorizedResponse();
	}

	const authorizationHeader = request.headers.get("authorization");

	if (!authorizationHeader?.startsWith("Basic ")) {
		return unauthorizedResponse();
	}

	const encodedCredentials = authorizationHeader.split(" ")[1];

	if (!encodedCredentials) {
		return unauthorizedResponse();
	}

	try {
		const decodedCredentials = atob(encodedCredentials);
		const [inputUsername, inputPassword] = decodedCredentials.split(":");

		if (inputUsername === username && inputPassword === password) {
			return NextResponse.next();
		}
	} catch {
		return unauthorizedResponse();
	}

	return unauthorizedResponse();
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml)$).*)",
	],
};
