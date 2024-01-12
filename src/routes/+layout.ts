// import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import type { LayoutLoad } from './$types';
import { firebaseConfig } from '$lib/firebase/config';

export const load: LayoutLoad = async () => {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	const db = getFirestore(app);

	let analytics;
	if (await isSupported()) {
		analytics = getAnalytics(app);
	}

	return { db, analytics };
};
