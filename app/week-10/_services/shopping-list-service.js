import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    try {
        const items = [];
        const docReference = collection(db, "users", userId, "items");
        const docSnap = await getDocs(docRef);
        docSnap.forEach(doc => {
                items.push({id: doc.id, ...doc.data()});
        })
        return items;
    } catch (error) {
        console.log("Error in getEvents:", error);
    }
}

export const addItem = async(userId, item) => {
    try {
    const docReference = await addDoc(collection(db, "users", userId, "items"), item);
    return docReference.id;
    } catch (error) {
        console.log("Error in addEvent:", error);
    }   
}