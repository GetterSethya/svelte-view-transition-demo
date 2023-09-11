// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface viewTransition {
		updateCallback: Promise<void>;
		ready: Promise<void>;
		finished: Promise<void>;
		skipTransiton: () => void;
	}

	interface Document {
		startViewTransition(updateCallback: () => Promise<void>): viewTransition;
	}
}

export {};
