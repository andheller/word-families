<script>
	import { wordList } from '../word-store.js';
	let letterIndex = 7;
	let rootIndex = 0;

	function incrementLetter() {
		let letterLength = $wordList[rootIndex].beginning.length;
		if (letterIndex == letterLength - 1) return (letterIndex = 0);
		letterIndex = letterIndex + 1;
	}
	function decrementLetter() {
		let letterLength = $wordList[rootIndex].beginning.length;
		if (letterIndex == 0) return (letterIndex = letterLength - 1);
		letterIndex = letterIndex - 1;
	}

	function incrementRoot() {
		let rootLength = $wordList.length;
		if (rootIndex == rootLength - 1) return (rootIndex = 0), (letterIndex = 0);
		rootIndex = rootIndex + 1;
		letterIndex = 0;
	}
	function decrementRoot() {
		let rootLength = $wordList.length;
		if (rootIndex == 0) return (rootIndex = rootLength - 1), (letterIndex = 0);
		rootIndex = rootIndex - 1;
		letterIndex = 0;
	}
	function handleKeydown(event) {
		let key = event.key;
		if (key === 'ArrowLeft') return decrementLetter();
		if (key === 'ArrowRight') return incrementLetter();
		if (key === ' ') return incrementLetter();
		if (key === 'ArrowUp') return incrementRoot();
		if (key === 'ArrowDown') return decrementRoot();
		checkKey(key);
	}

	function checkKey(key) {
		let index = $wordList[rootIndex].beginning.findIndex(
			(element) => element.charAt(0) == key.toUpperCase()
		);

		if (index >= 0) {
			letterIndex = index;
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="bg-white">
	<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			<span class="block">Word Families</span>
		</h2>
		<div class="mt-8 flex justify-center">
			<div
				on:click={decrementRoot}
				class="p-4 inline-flex text-gray-300 hover:text-gray-800 cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 m-auto"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
					/>
				</svg>
			</div>
			<div on:click={incrementLetter} class="cursor-pointer inline-flex rounded-md shadow-2xl p-4">
				<h1 class="text-4xl lg:text-9xl select-none">
					{$wordList[rootIndex].beginning[letterIndex]}
				</h1>
			</div>
			<div
				on:click={incrementRoot}
				class="cursor-pointer ml-3 inline-flex rounded-md shadow-2xl p-4"
			>
				<h1 class="text-4xl lg:text-9xl select-none">{$wordList[rootIndex].root}</h1>
			</div>
			<div
				on:click={incrementRoot}
				class="p-4 inline-flex text-gray-300 hover:text-gray-800 cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 m-auto"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>

<div>
	<h4 class="text-center text-2xl mt-8 select-none">Letters</h4>
	<div class="flex flex-wrap max-w-lg m-auto">
		{#each $wordList[rootIndex].beginning as letter, i}
			<div
				on:click={() => (letterIndex = i)}
				class="shadow p-4 m-2 cursor-pointer hover:bg-gray-50 border-2 select-none {letterIndex ===
				i
					? 'border-blue-500'
					: 'border-white'}"
			>
				<p>{letter}</p>
			</div>
		{/each}
	</div>
</div>
