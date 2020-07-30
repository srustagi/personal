import admin from 'firebase-admin'

const serviceAccount = require('personal-site-284108-a84e352c12bf.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()
// const yy = new admin.firestore.Timestamp(1595379008, 0)
// console.log(yy)

export async function getPosts() {
	
	const x = db.collection('posts').orderBy('date', 'desc')
	const snapshot = await x.get()
	return snapshot
	return 'hi'
}

