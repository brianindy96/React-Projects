import { db } from "../firebase-config"
// Methods from firestore to access and work on data in store
import { collection, 
         getDocs, 
         getDoc, 
         addDoc, 
         updateDoc, 
         deleteDoc, 
         doc 
        } from "firebase/firestore"

export const bookCollectionRef = collection(db, "books");

export const addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
}

export const updateBooks = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
}

export const deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
}

export const getAllBooks = () => {
    return getDocs(bookCollectionRef)
}

export const getBook = (id) => {
    // doc(firestore_reference, collection_name, id)
    const bookDoc = getDoc(db, "books", id)
}