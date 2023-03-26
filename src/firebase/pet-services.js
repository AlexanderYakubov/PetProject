import {db} from "./firebase-config";
import {doc, getDoc, updateDoc, arrayUnion, setDoc} from "firebase/firestore";
import {getDatabase, set, ref, get, child} from "firebase/database";


// export async function addTodo(title, uid){
//     const ref = doc(db, 'petsAccounts', uid);
//     const temp = await getDoc(ref);
//     if(temp.exists()){
//         await updateDoc(ref, {todo:arrayUnion(title)})
//     } else {
//         await setDoc(ref, {todo:[title]})
//     }
// }
//
// export async function getAllTasks(uid){
//     const ref = doc(db, 'todos', uid)
//     const temp = await getDoc(ref);
//     return temp.exists()?temp.data():{todo:[]};
// }
//
// export async function updateTask(uid, tasks){
//     const ref = doc(db, 'todos', uid);
//     await updateDoc(ref, {todo:tasks});
//
// }

export async function writeNewPostData(uid, data) {
    //const db = getDatabase();
    await setDoc(doc(db, "posts", `${uid}.${data.date}`), {
        userIcon: data.userIcon,
        date: data.date,
        userName: data.userName,
        text: data.text,
        photo1: data.photo1,
        photo2: data.photo2,
        photo3: data.photo3,
        photo4: data.photo4,
    });
}


// export async function readBdData() {
//     const dbRef = ref(getDatabase());
//     let userId;
//     get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             console.log(snapshot.val());
//         } else {
//             console.log("No data available");
//         }
//     }).catch((error) => {
//         console.error(error);
//     });
// }

export async function getPosts(uid){
    const docRef = doc(db, "posts", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    return docSnap.data();
}

