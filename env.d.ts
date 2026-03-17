/* eslint-disable @typescript-eslint/consistent-type-definitions */
// <reference types="next" />
// <reference types="next/types/global" />

declare namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_NODE_ENV: 'development' | 'production' | 'local';
		NEXT_PUBLIC_WEBSITE_URL: string;
	}
}
